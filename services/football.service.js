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
  getPositions() {
    const positions = fetch("http://localhost:3000/api/positions")
    .then(response => {
      return response.json();
    });
    return positions;  
  }
  getClubs() {
    const clubs = fetch("http://localhost:3000/api/clubs")
    .then(response => {
      return response.json();
    });
    return clubs;  
  }
  
  addPlayerBD = (data) => {
    const resp = fetch("http://localhost:3000/",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)}).then(response=>response); 
    return resp;
  };

  modifyPlayerBD = (data) => {
    const resp = fetch("http://localhost:3000/",{
      method: 'PUT',
      
      body: JSON.stringify(data)}).then(response=> response.text()); 
    return resp;
  };

  removePlayerBD = (name) =>  {
    const resp = fetch("http://localhost:3000/"+name,{
      method: 'DELETE'}).then(response=> response.text()); 
    return resp;
  }
};
