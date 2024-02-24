import { useState } from "react";
import FormLogin from "../Ui/FormLogin";

/**
 * Login component for user authentication.
 * @param {Object} props - Component props.
 * @param {Function} props.getName - Function to handle getting the player name.
 * @returns {JSX.Element} - Rendered Login component.
 */
function Login(props) {
  // State to store the player name
  const [player, setPlayer] = useState("");

  /**
   * Handles form submission.
   * Prevents default form submission behavior and calls props.getName function with player name if it's not empty.
   * Displays an alert if player name is empty.
   * @param {Object} event - Form submission event.
   */
  const submitHandler = (event) => {
    event.preventDefault();
    if (player.trim() !== "") {
      props.getName(player.trim());
    } else {
      alert("You should enter your name");
    }
  };

  /**
   * Handles input change for player name.
   * Updates the player state with the input value.
   * @param {Object} event - Input change event.
   */
  const nameHandler = (event) => {
    setPlayer(event.target.value);
  };

  return (
    <section
      className={`min-h-screen flex justify-center items-center bg-[url('/image/tommy.jpg')] bg-cover`}
    >
      {/* Render the FormLogin component with appropriate props */}
      <FormLogin
        submitHandler={submitHandler}
        player={player}
        nameHandler={nameHandler}
      />
    </section>
  );
}

export default Login;
