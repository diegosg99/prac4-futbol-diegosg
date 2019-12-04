class footballService {
  constructor() {
    this.players = this.getPlayers();
    this.clubs = CLUBS;
    this.positions = POSITIONS;
  }
  getPlayers() {
    const players = fetch("http://localhost:3000/")
    .then(response => {
      return response.json();
    });
    return players;
  }
  getPlayer(name) {
    const player = fetch("http://localhost:3000/"+name)
    .then(response => {
      return response.json();
    });
    return player;  
  }
  removePlayerBD(name) {
    const conf = { method: 'DELETE'};
    const request = new Request('http://localhost:3000/'+name, conf);
    const resp = fetch(request).then(response=> response);  
    return resp;
  }
  addPlayerBD(data) {
    const conf = { method: 'POST',body: JSON.stringify(data),mode: 'cors', cache: 'default' };
    const request = new Request('http://localhost:3000/', conf);
    const resp = fetch(request).then(response=> response);  
    return resp;  
  }
  modifyPlayerBD(data) {
    const conf = { method: 'PUT',body: JSON.stringify(data),mode: 'cors', cache: 'default' };
    const request = new Request('http://localhost:3000/', conf);
    const resp = fetch(request).then(response=> response);  
    return resp;  }
}
