import { useState } from "react";
import FormLogin from "../Ui/FormLogin";
function Login(props) {
  const [player, setPlayer] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (player.trim() !== "") {
      props.getName(player.trim());
    } else {
      alert("You should enter your name");
    }
  };
  const nameHandler = (event) => {
    setPlayer(event.target.value);
  };
  return (
    <section
      className={`min-h-screen flex justify-center items-center bg-[url('/image/tommy.jpg')] bg-cover`}
    >
      <FormLogin
        submitHandler={submitHandler}
        player={player}
        nameHandler={nameHandler}
      />
    </section>
  );
}

export default Login;
