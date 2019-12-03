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
  removePlayer(name) {
    delete this.players.find(player => player.name === name);
  }
  addPlayer({ name, alias, position, bornDate, club, photo = '' }) {
    const player = new Player(name, alias, position, bornDate, club, photo);
    this.players = [...this.players, player];
  }
  modifyPlayer({ name, alias, position, bornDate, club, photo = '' }) {
    let player = this.getPlayer(name);
    player.setName(name);
    player.setAlias(alias);
    player.setBornDate(bornDate);
    player.setPosition(position);
    player.setClub(club);
    player.setClub(photo);
    this.removePlayer(name);
    this.addPlayer(player);
  }
}
