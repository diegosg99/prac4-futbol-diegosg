class footballView {
  constructor() {
    this.GUI = {
      inputName: document.getElementById('name'),
      inputAlias: document.getElementById('alias'),
      inputPosition: document.getElementById('position'),
      inputBornDate: document.getElementById('bornDate'),
      inputClub: document.getElementById('club'),
      list: document.getElementById('list')
    };
  }
  initPlayers(players){
    players.map(player=> this.printPlayer(player.toList()));
  }
  printPlayer(html){
    this.GUI.list.innerHTML = html;
  }
}
