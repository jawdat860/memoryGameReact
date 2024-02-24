import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import Context from "../../dataContext/Context";
import PopupUi from "../Ui/PopupUi";
const Popup = (props) => {
  const ctx = useContext(Context);
  return (
    <Fragment>
      {createPortal(
        <PopupUi
          start={ctx.winPlay}
          namePlayer={props.namePlayer}
          worngTry={ctx.worngTry}
          time={props.time}
          h={ctx.newGame}
        />,
        document.getElementById("over")
      )}
    </Fragment>
  );
};

export default Popup;
