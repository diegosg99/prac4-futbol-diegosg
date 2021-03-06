class footballView {
  constructor() {
    this.GUI = {
      inputName: document.getElementById('name'),
      inputAlias: document.getElementById('alias'),
      inputPosition: document.getElementById('position'),
      inputBornDate: document.getElementById('bornDate'),
      inputClub: document.getElementById('club'),
      list: document.getElementById('list'),
      add: document.getElementById('add'),
      modify: document.getElementById('modify'),
      delete: document.getElementById('delete'),
      search: document.getElementById('search')     
    };
  }
  initPlayers(players){
    this.GUI.list.innerHTML = "";
    players.map(player=> {
    this.printPlayer(player.toList())});
  }
  initPositions(positions){
    for (let [i, v] of positions.entries()){
      this.GUI.inputPosition.innerHTML += "<option id='"+i+"'>"+v+"</option>"
    }
  }
  initClubs(clubs){
    for (let [i, v] of clubs.entries()){
      this.GUI.inputClub.innerHTML += "<option id='"+i+"'>"+v+"</option>"
    }
  }
  printPlayer(html){
    this.GUI.list.innerHTML += html;
  }

  getData(){
    const data = {
      name: this.GUI.inputName.value,
      alias: this.GUI.inputAlias.value,
      pos: this.GUI.inputPosition.value,
      fecha: this.GUI.inputBornDate.value,
      club: this.GUI.inputClub.value
    };
    return data;
  }

  bindAdd = (handler)=>{
    this.GUI.add.addEventListener("onclick",handler);
  }
  bindModify=(handler)=>{
    this.GUI.modify.addEventListener("onclick",handler);
  }
  bindDelete=(handler)=>{
    this.GUI.delete.addEventListener("onclick",handler);
  }
  bindSearch=(handler)=>{
    this.GUI.search.addEventListener("onkeypress",handler);
  }
}
