class footballController {
  constructor(_view, _footballService, _regExpServie) {
    this.view = _view;
    this.footballService = _footballService;
    this.regExpService = _regExpServie;
    this.initList();
  }
  async initList(){
    const jsonplayers = await this.footballService.getPlayers();
    let players = jsonplayers.map(player => {return new Player(player.NOMBRE,player.ALIAS,player.ID_POS,player.FECHA_NACIMIENTO,player.CLUB)});
    this.view.initPlayers(players);
  }
}
