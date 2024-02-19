import { useState } from "react";

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
    <section className="min-h-screen flex justify-center items-center bg-[url('/img/tommy.jpg')] bg-cover">
      <form
        onSubmit={submitHandler}
        className="flex flex-col bg-white bg-opacity-80 rounded-lg shadow-md max-w-lg w-11/12 p-6"
      >
        <label htmlFor="name" className="text-lg mb-2 font-bold">Enter Your Name:</label>
        <input
          id="name"
          type="text"
          value={player}
          onChange={nameHandler}
          className="border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
