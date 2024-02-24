import { useContext, useEffect, useState } from "react";

import Context from "../../dataContext/Context";

import SingleCard from "../Card/SingleCard";
import Navbar from "../Navbar/Navbar";
import Popup from "../Popup/Popup";

function CardData({ namePlayer }) {
  const ctx = useContext(Context);
  const [time , setTime]=useState("")
  useEffect(() => {
    ctx.shuffleCards();
  }, []);

  useEffect(() => {
    ctx.comp();
  }, [ctx.choiceTwo]);
  function getTime(v){
    setTime(v)
  }
  
  return (
    <>
      <Popup namePlayer={namePlayer}  time={time} />
      <Navbar namePlayer={namePlayer}  getTime={getTime}/>
      <div className="flex justify-center">
      <div className="grid grid-cols-4 mt-[10px] ">
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
