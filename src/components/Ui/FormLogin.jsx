import React from "react";

/**
 * Form component for user login.
 * @param {Object} props - Component props.
 * @param {Function} props.submitHandler - Function to handle form submission.
 * @param {string} props.player - Value of the input field (player name).
 * @param {Function} props.nameHandler - Function to handle changes in the input field.
 * @returns {JSX.Element} - Rendered FormLogin component.
 */
const FormLogin = (props) => {
  return (
    <form
      onSubmit={props.submitHandler}
      className="flex flex-col bg-white bg-opacity-80 rounded-lg shadow-md max-w-lg w-11/12 p-6"
    >
      <label htmlFor="name" className="text-lg mb-2 font-bold">
        Enter Your Name:
      </label>
      <input
        id="name"
        type="text"
        value={props.player}
        onChange={props.nameHandler}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default FormLogin;
