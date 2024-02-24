import React, { useReducer } from "react";
import Context from "./Context";
import cardImages from "./DataImage";

// Total number of matches required to win the game
const win = 8;

// Initial state of the game
const initialState = {
  cards: [],
  worngTry: 0,
  finalResult: 0,
  choiceOne: null,
  choiceTwo: null,
  disabled: false,
  startTimer: false,
  winPlay: false,
  newGameButton: false,
};

/**
 * Reducer function to handle state transitions.
 * @param {Object} state - Current state.
 * @param {Object} action - Action object containing the type and payload.
 * @returns {Object} - New state.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CARDS":
      // Set the cards array with the payload
      return { ...state, cards: action.payload };
    case "SET_WORNG_TRY":
      // Set the number of wrong tries with the payload
      return { ...state, worngTry: action.payload };
    case "SET_CHOICES":
      // Set the choiceOne and choiceTwo with the payload
      return {
        ...state,
        choiceOne: action.payload.choiceOne,
        choiceTwo: action.payload.choiceTwo,
      };
    case "SET_DISABLED":
      // Set the disabled flag with the payload
      return { ...state, disabled: action.payload };
    case "SET_TIMER":
      // Set the startTimer flag with the payload
      return { ...state, startTimer: action.payload };
    case "SET_WIN":
      // Set the finalResult with the payload
      return { ...state, finalResult: action.payload };
    case "SET_FINSH_GAME":
      // Set the winPlay flag with the payload
      return { ...state, winPlay: action.payload };
    case "GAME_BUTTON":
      // Set the newGameButton flag with the payload
      return { ...state, newGameButton: action.payload };
    case "RESET_CHOICES":
      // Reset the choiceOne and choiceTwo to null
      return { ...state, choiceOne: null, choiceTwo: null };
    default:
      // Return the current state for unknown actions
      return state;
  }
};

/**
 * Context provider for managing game state.
 * @param {Object} props - Component props.
 * @returns {JSX.Element} - Rendered provider component.
 */
const Provider = (props) => {
  // Use reducer hook to manage state with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Shuffles the cards and initializes game state.
   */
  const shuffleCards = () => {
    // Shuffle the cards
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    // Set the shuffled cards array with a delay
    dispatch({ type: "SET_CARDS", payload: shuffledCards });
    setTimeout(() => {
      // Map the shuffled cards to set matched property to false
      const newCards = shuffledCards.map((card) => ({
        ...card,
        matched: false,
      }));
      // Set the new cards array
      dispatch({ type: "SET_CARDS", payload: newCards });
    }, 2000);

    // Reset worngTry, choices, and startTimer flag with a delay
    dispatch({ type: "SET_WORNG_TRY", payload: 0 });
    dispatch({
      type: "SET_CHOICES",
      payload: { choiceOne: null, choiceTwo: null },
    });
    setTimeout(() => dispatch({ type: "SET_TIMER", payload: true }), 2000);
  };

  /**
   * Starts a new game.
   */
  const newGame = () => {
    // Reset finalResult, newGameButton, startTimer, and winPlay flags with a delay
    dispatch({ type: "SET_WIN", payload: 0 });
    dispatch({ type: "GAME_BUTTON", payload: true });
    dispatch({ type: "SET_TIMER", payload: false });
    dispatch({ type: "SET_FINSH_GAME", payload: false });
    setTimeout(() => dispatch({ type: "GAME_BUTTON", payload: false }), 2500);
    // Shuffle the cards
    shuffleCards();
  };

  /**
   * Handles the selection of a card.
   * @param {Object} card - The selected card.
   */
  const handleChoice = (card) => {
    // Set the choiceOne and choiceTwo based on the current state
    dispatch({
      type: state.choiceOne ? "SET_CHOICES" : "SET_CHOICES",
      payload: state.choiceOne
        ? { choiceOne: state.choiceOne, choiceTwo: card }
        : { choiceOne: card, choiceTwo: null },
    });
  };

  /**
   * Compares the selected cards and updates game state accordingly.
   */
  const comp = () => {
    // Check if the final result is equal to the win condition
    if (state.finalResult === win) {
      // Set the winPlay flag and stop the timer
      dispatch({ type: "SET_FINSH_GAME", payload: true });
      dispatch({ type: "SET_TIMER", payload: false });
    }
    // Check if both choices are made and they are not the same card
    if (
      state.choiceOne &&
      state.choiceTwo &&
      state.choiceOne.id !== state.choiceTwo.id
    ) {
      // Disable the cards temporarily
      dispatch({ type: "SET_DISABLED", payload: true });
      // Check if the choices match
      if (state.choiceOne.src === state.choiceTwo.src) {
        // Update the matched property of the cards
        dispatch({
          type: "SET_CARDS",
          payload: state.cards.map((card) =>
            card.src === state.choiceOne.src ? { ...card, matched: true } : card
          ),
        });
        // Increment the final result and check for the win condition
        dispatch({ type: "SET_WIN", payload: state.finalResult + 1 });
        if (state.finalResult === win) {
          // Set the winPlay flag if the win condition is met
          dispatch({ type: "SET_FINSH_GAME", payload: true });
        }
      } else {
        // Increment the number of wrong tries for wrong choices
        dispatch({ type: "SET_WORNG_TRY", payload: state.worngTry + 1 });
      }
      // Reset the choices and enable the cards after a delay
      setTimeout(() => {
        dispatch({ type: "RESET_CHOICES" });
        dispatch({ type: "SET_DISABLED", payload: false });
      }, 1000);
    }
  };

  // Context value containing state and functions
  const context = {
    ...state,
    shuffleCards,
    newGame,
    handleChoice,
    comp,
  };

  // Render the context provider with the context value
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Provider;
