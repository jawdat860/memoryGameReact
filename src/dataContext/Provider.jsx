import React, { useReducer } from "react";
import Context from "./Context";
import cardImages from "./DataImage";
const win = 8;
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

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, cards: action.payload };
    case "SET_WORNG_TRY":
      return { ...state, worngTry: action.payload };
    case "SET_CHOICES":
      return {
        ...state,
        choiceOne: action.payload.choiceOne,
        choiceTwo: action.payload.choiceTwo,
      };
    case "SET_DISABLED":
      return { ...state, disabled: action.payload };
    case "SET_TIMER":
      return { ...state, startTimer: action.payload };
    case "SET_WIN":
      return { ...state, finalResult: action.payload };
    case "SET_FINSH_GAME":
      return { ...state, winPlay: action.payload };
    case "GAME_BUTTON":
      return { ...state, newGameButton: action.payload };
    case "RESET_CHOICES":
      return { ...state, choiceOne: null, choiceTwo: null };
    default:
      return state;
  }
};

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    dispatch({ type: "SET_CARDS", payload: shuffledCards });
    setTimeout(() => {
      const newCards = shuffledCards.map((card) => ({
        ...card,
        matched: false,
      }));
      dispatch({ type: "SET_CARDS", payload: newCards });
    }, 2000);

    dispatch({ type: "SET_WORNG_TRY", payload: 0 });
    dispatch({
      type: "SET_CHOICES",
      payload: { choiceOne: null, choiceTwo: null },
    });
    setTimeout(() => dispatch({ type: "SET_TIMER", payload: true }), 2000);
  };

  const newGame = () => {
    dispatch({ type: "SET_WIN", payload: 0 });
    dispatch({ type: "GAME_BUTTON", payload: true });
    dispatch({ type: "SET_TIMER", payload: false });
    dispatch({ type: "SET_FINSH_GAME", payload: false });
    setTimeout(() => dispatch({ type: "GAME_BUTTON", payload: false }), 2500);
    shuffleCards();
  };

  const handleChoice = (card) => {
    dispatch({
      type: state.choiceOne ? "SET_CHOICES" : "SET_CHOICES",
      payload: state.choiceOne
        ? { choiceOne: state.choiceOne, choiceTwo: card }
        : { choiceOne: card, choiceTwo: null },
    });
  };

  const comp = () => {
    if (state.finalResult === win) {
      dispatch({ type: "SET_FINSH_GAME", payload: true });
    }
    if (
      state.choiceOne &&
      state.choiceTwo &&
      state.choiceOne.id !== state.choiceTwo.id
    ) {
      dispatch({ type: "SET_DISABLED", payload: true });
      if (state.choiceOne.src === state.choiceTwo.src) {
        dispatch({
          type: "SET_CARDS",
          payload: state.cards.map((card) =>
            card.src === state.choiceOne.src ? { ...card, matched: true } : card
          ),
        });
        dispatch({ type: "SET_WIN", payload: state.finalResult + 1 });
        if (state.finalResult === win) {
          dispatch({ type: "SET_FINSH_GAME", payload: true });
        }
      } else {
        // Handle wrong choice
        dispatch({ type: "SET_WORNG_TRY", payload: state.worngTry + 1 });
      }
      setTimeout(() => {
        dispatch({ type: "RESET_CHOICES" });
        dispatch({ type: "SET_DISABLED", payload: false });
      }, 1000);
    }
  };

  const context = {
    ...state,
    shuffleCards,
    newGame,
    handleChoice,
    comp,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Provider;
