function NavbarUi(props) {
  return (
    <>
      <h3 className="text-lg font-semibold">Memory Game</h3>
      <p className="text-lg hidden md:block  ">
        Player Name: {props.namePlayer}
      </p>
      <p className="text-lg hidden md:block ">Wrong: {props.worngTry}</p>

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
