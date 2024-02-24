import { useContext, useEffect, useState } from "react";

import Context from "../../dataContext/Context";

import SingleCard from "./SingleCard";
import Navbar from "./Navbar/Navbar";
import Popup from "./Popup";

/**
 * CardData component renders the game board with cards.
 * @param {Object} props - Component props.
 * @param {string} props.namePlayer - The name of the player.
 * @returns {JSX.Element} - Rendered component.
 */
function CardData({ namePlayer }) {
  const ctx = useContext(Context);
  const [time , setTime]=useState("");

  /**
   * Runs once on component mount to shuffle the cards.
   */
  useEffect(() => {
    ctx.shuffleCards();
  }, []);

  /**
   * Runs whenever ctx.choiceTwo changes to compare choices.
   */
  useEffect(() => {
    ctx.comp();
  }, [ctx.choiceTwo]);

  /**
   * Updates the time state.
   * @param {string} v - Time value.
   */
  function getTime(v){
    setTime(v);
  }
  
  return (
    <>
      <Popup namePlayer={namePlayer} time={time} />
      <Navbar namePlayer={namePlayer} getTime={getTime} />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 mt-[10px]">
          {ctx.cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={ctx.handleChoice}
              cardFlipped={
                card === ctx.choiceOne || card === ctx.choiceTwo || card.matched
              }
              disabled={ctx.disabled}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardData;
