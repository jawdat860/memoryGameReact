import { useContext } from "react";
import Context from "../../dataContext/Context";
import Timer from "../Timer/Timer";

function Navbar(props) {
  const ctx = useContext(Context);
  function getTime(time) {
    props.getTime(time);
  }

  return (
    <nav className="bg-gray-800 text-white w-full py-3 px-4 flex flex-col sm:flex-row justify-between items-center gap-5 sm:h-[50px] ]">
      <h3 className="text-lg font-semibold">Memory Game</h3>
      <p className="text-lg hidden md:block  ">
        Player Name: {props.namePlayer}
      </p>
      <p className="text-lg hidden md:block ">Wrong: {ctx.worngTry}</p>
      <div className="flex items-center  sm:mt-0">
        <Timer getTime={getTime} />
      </div>

      <button
        onClick={ctx.newGame}
        disabled={ctx.newGameButton}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg disabled:opacity-50 hover:bg-blue-600 transition duration-300"
      >
        New Game
      </button>
    </nav>
  );
}

export default Navbar;
