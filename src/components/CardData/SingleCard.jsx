import React from "react";

/**
 * SingleCard component represents a single card in the game board.
 * @param {Object} props - Component props.
 * @param {Object} props.card - The card object containing image source and other details.
 * @param {Function} props.handleChoice - Function to handle card selection.
 * @param {boolean} props.cardFlipped - Flag indicating whether the card is flipped.
 * @param {boolean} props.disabled - Flag indicating whether the card is disabled.
 * @returns {JSX.Element} - Rendered card component.
 */
export default function SingleCard({ card, handleChoice, cardFlipped, disabled }) {
  /**
   * Handles click event on the card.
   * Calls handleChoice function if the card is not disabled.
   */
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative cursor-pointer sm:w-[200px] sm:h-[140px]">
      <div className={cardFlipped ? "flipped" : ""}>
        {/* Front face of the card */}
        <img
          className="front w-[200px] h-[138px] block border-2 border-white rounded-md"
          src={card.src}
          alt="front face"
          loading="eager"
        />
        {/* Back face of the card */}
        <div
          className="back w-[200px] h-[138px] bg-[url('/image/cover.jpg')] block border-2 border-white rounded-md"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
