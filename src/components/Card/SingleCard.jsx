

import style from "./SingleCard.module.css";

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
      <div className={cardFlipped ? style.flipped : ""}>
        <img className={`${style.front}  w-[200px] h-[138px] block border-2 border-white rounded-md`} src={card.src} alt="Card front" />
        <img
          className={`${style.back}  w-[200px] h-[138px]  block border-2 border-white rounded-md`}
          src="/img/cover.jpg"
          onClick={handleClick}
          alt="Card back"
        />
      </div>
    </div>
  );
}