class footballService {
  constructor() {
    this.players = PLAYERS;
    this.clubs = CLUBS;
    this.positions = POSITIONS;
  }
  getPlayer(name) {
    return this.players.find(player => player.name === name);
  }
  removePlayer(name) {
    delete this.players.find(player => player.name === name);
  }
  addPlayer({ name, alias, position, bornDate, club, photo = '' }) {
    const player = new PLayer(name, alias, position, bornDate, club, photo);
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
