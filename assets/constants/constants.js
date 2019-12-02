const POSITIONS = {
  goalKeeper: 'Portero',
  defense: 'Defensa',
  middle: 'Medio',
  forward: 'Delantero'
};
const CLUBS = ['Madrid', 'Barcelona', 'Chapecoense', 'Millenial FC', 'Coinbra'];
const PLAYERS = [
  new Player('Pepe Beltran', 'pepete', 'Banquillo', '03/12/1990', 'Chapecoense')
];
const REGEXP = {
  NAME: /^[a-zA-Z]{3,255}/,
  ALIAS: /^[a-zA-Z]{3,64}/,
  SPBIRTHDAY: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)[0-9]{4}$/
};
