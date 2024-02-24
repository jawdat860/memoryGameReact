import { createContext } from "react";

const Context = createContext({
  cards: [],

  choiceOne: null,
  choiceTwo: null,
  disabled: false,
  shuffleCards: () => {},
  handleChoice: (card) => {},
  comp: () => {},
   newGame : () => {},
  worngTry: 0,
  finalResult : 0,
  startTimer: false,
  winPlay:false,
  newGameButton:false
});
export default Context;
