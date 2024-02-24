import { useState } from "react";
import Login from "./components/Login/Login";
import CardData from "./components/CardData/CardData";

/**
 * Main component representing the entire application.
 * @returns {JSX.Element} - Rendered App component.
 */
function App() {
  // State to manage player name and game visibility
  const [namePlayer, setNamePlayer] = useState("");
  const [showGame, setShowGame] = useState(false);

  /**
   * Handler function to set the player name and show the game.
   * @param {string} player - The name of the player.
   */
  function getNameHandler(player) {
    setNamePlayer(player);
    setShowGame(true);
  }

  return (
    <section className="w-full h-screen">
      {/* Render Login component if game is not shown, otherwise render CardData component */}
      {!showGame ? <Login getName={getNameHandler} /> : <CardData namePlayer={namePlayer} />}
    </section>
  );
}

export default App;
