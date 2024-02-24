import React from "react";

/**
 * UI component for the navbar of the memory game.
 * @param {Object} props - Component props.
 * @param {string} props.namePlayer - The name of the player.
 * @param {number} props.worngTry - The number of wrong attempts made by the player.
 * @param {Function} props.newGame - Function to start a new game.
 * @param {boolean} props.newGameButton - Indicates whether the new game button is disabled.
 * @returns {JSX.Element} - Rendered NavbarUi component.
 */
function NavbarUi(props) {
  return (
    <>
      {/* Title of the game */}
      <h3 className="text-lg font-semibold">Memory Game</h3>
      
      {/* Display player name (hidden on smaller screens) */}
      <p className="text-lg hidden md:block">Player Name: {props.namePlayer}</p>
      
      {/* Display the number of wrong attempts (hidden on smaller screens) */}
      <p className="text-lg hidden md:block">Wrong: {props.worngTry}</p>

      {/* Button to start a new game */}
      <button
        onClick={props.newGame}
        disabled={props.newGameButton}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50 hover:bg-blue-600 transition duration-300"
      >
        New Game
      </button>
    </>
  );
}

export default NavbarUi;
