import { createContext } from "react";

/**
 * Context for managing game-related state and actions.
 * @type {import("react").Context<{
 *   cards: Array<Object>, 
 *   choiceOne: Object | null, 
 *   choiceTwo: Object | null, 
 *   disabled: boolean, 
 *   shuffleCards: Function, 
 *   handleChoice: Function, 
 *   comp: Function, 
 *   newGame: Function, 
 *   worngTry: number, 
 *   finalResult: number, 
 *   startTimer: boolean, 
 *   winPlay: boolean, 
 *   newGameButton: boolean
 * }>}
 */
const Context = createContext({
  // Initial state values
  cards: [],
  choiceOne: null,
  choiceTwo: null,
  disabled: false,
  worngTry: 0,
  finalResult: 0,
  startTimer: false,
  winPlay: false,
  newGameButton: false,
  // Placeholder functions for actions
  shuffleCards: () => {},
  handleChoice: (card) => {},
  comp: () => {},
  newGame: () => {},
});

export default Context;
