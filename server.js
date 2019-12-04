  const express = require('express');
  const http = require('http');
  const app = express();
  const bodyParser = require('body-parser');
  const mysql = require('mysql');
  const cors = require('cors');
  const fs = require('fs');

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

      const connection = mysql.createConnection({ host : 'localhost', database : 'FUTBOL', user : 'root', password : 'root', });
      connection.connect(function(err) { 
        err ? console.error('Error connecting: ' + err.stack) :console.log('Connected as id ' + connection.threadId);
        });

      app.get('/', (req, res) => {
      connection.query('SELECT ALIAS,NOMBRE,FECHA_NACIMIENTO,ID_POS,CLUB FROM players;', function (err, results, fields) { 
      if (err) res.status(404).send();
            res.status(200).send(results);
        });
      });
      
      app.get("/:name",(req,res)=>{
        const name = req.params.name;
      connection.query('SELECT ALIAS,NOMBRE,FECHA_NACIMIENTO,ID_POS,CLUB FROM players WHERE NOMBRE = ?', name, function (err, result, fields) { 
        if (err) res.status(404).send();
            res.status(200).send(result);
          });
      })
      app.post('/', (req, res) => {
        const {alias,name,fecha,pos,club  } = req.body;
        connection.query("INSERT INTO players (alias,nombre,fecha_nacimiento,id_pos,club,foto) VALUES (?,?,?,?,?)", [alias,name,fecha,pos,club], function (err, result) {
          if (err) res.status(404).send();
            res.status(200).send("Insertado");
          });
      });    
      app.put('/', (req, res) => {
        const { alias,name,fecha,pos,club } = req.body;
        connection.query("UPDATE 'players' SET 'alias' = ? ,'nombre' =?,'fecha_nacimiento' = ? ,'id_pos' = ? ,'club' = ? ,WHERE NOMBRE = ?;", [alias,name,fecha,pos,club,name], function (err, result) {
          if (err) res.status(404).send();
            res.status(200).send("Usuario modificado");
      });
    });
      app.delete('/:name', (req, res) => {
        const name = req.params.name;
        connection.query("DELETE FROM players WHERE NOMBRE = ?;", name, function (err, result) {
          if (err) res.status(404).send();
          console.log(result);
          res.status(200).send('usuario eliminado');
        });
      });
 
http.createServer(app).listen(3000, () => {
  console.log('creado');
});