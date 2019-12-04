class footballController {
  constructor(_view, _footballService, _regExpServie) {
    this.view = _view;
    this.footballService = _footballService;
    this.regExpService = _regExpServie;
    this.initPage();

  }
  initPage(){
    this.initList();
    this.view.bindAdd(this.addHandler());
    this.view.bindModify(this.modifyHandler());
    this.view.bindDelete(this.removeHandler());
    this.view.bindSearch(this.searchPlayer());
  }
  async initList(){
    const jsonplayers = await this.footballService.getPlayers();
    let players = jsonplayers.map(player => {return new Player(player.NOMBRE,player.ALIAS,player.ID_POS,player.FECHA_NACIMIENTO,player.CLUB)});
    this.view.initPlayers(players);
  }
   addHandler(){
    const data = this.view.getData();console.log(data);
     this.footballService.addPlayerBD(data);
  }
 modifyHandler(){
    const data = this.view.getData();console.log(data);
   this.footballService.modifyPlayerBD(data);
  }
  async removeHandler(){
    const data = this.view.getData();console.log(data);
     this.footballService.removePlayerBD(data.name);
  }
  async searchPlayer(){
    const name = this.view.GUI.search.value;
    const jsonplayers = await this.footballService.getPlayer(name);
      let players = jsonplayers.map(player => {return new Player(player.NOMBRE,player.ALIAS,player.ID_POS,player.FECHA_NACIMIENTO,player.CLUB)});
      this.view.initPlayers(players);
    }
}
