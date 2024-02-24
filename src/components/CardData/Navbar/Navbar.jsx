import { useContext } from "react";
import Context from "../../../dataContext/Context";
import Timer from "./Timer";
import NavbarUi from "../../Ui/NavbarUi";

function Navbar(props) {
  const ctx = useContext(Context);
  function getTime(time) {
    props.getTime(time);
  }

  return (
    <nav className="bg-gray-800 text-white w-full py-3 px-4 flex flex-col sm:flex-row justify-between items-center gap-5 sm:h-[50px] ]">
      <NavbarUi
        namePlayer={props.namePlayer}
        worngTry={ctx.worngTry}
        newGame={ctx.newGame}
        newGameButton={ctx.newGameButton}
      />
      <div className="flex items-center  sm:mt-0">
        <Timer getTime={getTime} />
      </div>
    </nav>
  );
}

export default Navbar;
