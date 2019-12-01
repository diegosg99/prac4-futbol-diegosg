class Player {
  name;
  alias;
  position;
  bornDate;
  club = [];
  constructor(_name, _alias_, _position, _bornDate, _club) {
    this.name = _name;
    this.alias = _alias;
    this.position = _position;
    this.bornDate = _bornDate;
    this.club = [...this.club, club];
  }
  setName = name => {
    this.name = name;
  };

  getName = () => {
    return this.name;
  };
  setAlias = alias => {
    this.alias = alias;
  };

  getAlias = () => {
    return this.alias;
  };
  setPosition = position => {
    this.position = position;
  };

  getPosition = () => {
    return this.position;
  };
  setBornDate = bornDate => {
    this.bornDate = bornDate;
  };

  getBornDate = () => {
    return this.bornDate;
  };
  setClub = club => {
    this.club = [...this.club, club];
  };

  getClub = () => {
    return this.club;
  };
}
