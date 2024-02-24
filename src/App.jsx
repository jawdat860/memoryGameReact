import { useState } from "react";
import Login from "./components/Login/Login";
import CardData from "./components/CardData/CardData";


function App() {
  const [namePlayer, setNamePlayer] = useState("");
  const [showGame, setShowGame] = useState(false);
  function getNameHandler(player) {
    setNamePlayer(player);
    setShowGame(true);
  }
  return (
    <section className=" w-full h-screen">
      
      {!showGame ? <Login getName={getNameHandler} /> : <CardData namePlayer={namePlayer} />}</section>
  );
}
export default App;
