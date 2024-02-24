import { useEffect } from "react";
import { useState } from "react";

export default function SingleCard({
  card,
  handleChoice,
  cardFlipped,
  disabled,
}) {
  // destructure card and handleChoice props from App
 
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className=" relative cursor-pointer sm:w-[200px] sm:h-[140px] ">
      <div className={cardFlipped ? "flipped" : ""}>
        <img
          className={`front   w-[200px] h-[138px] block border-2 border-white rounded-md`}
        src={card.src}
        alt="front face"
        loading="eager"
        />
        <div
          className={`back  w-[200px] h-[138px] bg-[url('/image/cover.jpg')]  block border-2 border-white rounded-md`}
          
          onClick={handleClick}
          
        />
      </div>
    </div>
  );
}
