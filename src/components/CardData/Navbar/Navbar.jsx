import { useContext } from "react";
import Context from "../../../dataContext/Context";
import Timer from "./Timer";
import NavbarUi from "../../Ui/NavbarUi";

/**
 * Navbar component for displaying game navigation and information.
 * @param {Object} props - Component props.
 * @param {string} props.namePlayer - The name of the player.
 * @param {Function} props.getTime - Function to update the elapsed time.
 * @returns {JSX.Element} - Rendered Navbar component.
 */
function Navbar(props) {
  // Access game context
  const ctx = useContext(Context);

  /**
   * Passes the elapsed time to the parent component.
   * @param {string} time - The elapsed time in MM:SS format.
   */
  function getTime(time) {
    props.getTime(time);
  }

  return (
    <nav className="bg-gray-800 text-white w-full py-3 px-4 flex flex-col sm:flex-row justify-between items-center gap-5 sm:h-[50px]">
      {/* Render the NavbarUi component with appropriate props */}
      <NavbarUi
        namePlayer={props.namePlayer}
        worngTry={ctx.worngTry}
        newGame={ctx.newGame}
        newGameButton={ctx.newGameButton}
      />
      <div className="flex items-center sm:mt-0">
        {/* Render the Timer component with getTime prop */}
        <Timer getTime={getTime} />
      </div>
    </nav>
  );
}

export default Navbar;
