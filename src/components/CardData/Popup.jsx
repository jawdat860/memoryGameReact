import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import Context from "../../dataContext/Context";
import PopupUi from "../Ui/PopupUi";

/**
 * Popup component for displaying game-related information.
 * @param {Object} props - Component props.
 * @param {string} props.namePlayer - The name of the player.
 * @param {number} props.time - The time taken by the player.
 * @returns {JSX.Element} - Rendered Popup component.
 */
const Popup = (props) => {
  // Access game context
  const ctx = useContext(Context);

  return (
    <Fragment>
      {/* Create a portal to render the PopupUi component */}
      {createPortal(
        <PopupUi
          start={ctx.winPlay}
          namePlayer={props.namePlayer}
          worngTry={ctx.worngTry}
          time={props.time}
          h={ctx.newGame}
        />,
        // Mount the portal in the element with ID "over"
        document.getElementById("over")
      )}
    </Fragment>
  );
};

export default Popup;
