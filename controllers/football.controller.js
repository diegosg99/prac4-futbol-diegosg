class footballController {
  constructor(_view, _footballService, _regExpServie) {
    this.view = _view;
    this.footballService = _footballService;
    this.regExpService = _regExpServie;
    this.initPage();
  }
  initPage(){
    this.initList();
    this.initPositions();
    this.initClub();
    this.view.bindAdd(this.addHandler.bind(this)());
    this.view.bindModify(this.modifyHandler.bind(this)());
    this.view.bindDelete(this.removeHandler.bind(this)());
    this.view.bindSearch(this.searchPlayer.bind(this)()); 
  }
  async initList(){
    const jsonplayers = await this.footballService.getPlayers();
    let players = jsonplayers.map(player => {return new Player(player.NOMBRE,player.ALIAS,player.ID_POS,player.FECHA_NACIMIENTO,player.CLUB)});
    this.view.initPlayers(players);
  }
  async initPositions(){
    const jsonPositions = await this.footballService.getPositions();
    let positions = jsonPositions.map(position => position.DESCRIPCION);
    this.view.initPositions(positions);
  }
  async initClub(){
    const jsonclub = await this.footballService.getClubs();
    let club = jsonclub.map(club => club.name);
    this.view.initClubs(club);
  }
  addHandler = async () =>{
    const data = this.view.getData();
    this.footballService.addPlayerBD(data); 
  }
  modifyHandler= async () => {
    console.log(this);
    const data = this.view.getData();
    return await this.footballService.modifyPlayerBD(data);
  }
  removeHandler = async () =>{
    const data = this.view.getData();
    return await this.footballService.removePlayerBD(data.name);
  }
  async searchPlayer(){
    const name = this.view.GUI.search.value;
    console.log(name);
    const jsonplayers = await this.footballService.getPlayer(name);
      let players = jsonplayers.map(player => {return new Player(player.NOMBRE,player.ALIAS,player.ID_POS,player.FECHA_NACIMIENTO,player.CLUB)});
      this.view.initPlayers(players);
    }
}
