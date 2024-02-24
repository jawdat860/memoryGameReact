function PopupUi(props) {
  return (
    <div
      className={
        props.start
          ? `fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-50`
          : "hidden"
      }
    >
      <div
        className={
          !props.start
            ? "hidden"
            : "absolute inset-0 flex justify-center items-center"
        }
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">
            {props.namePlayer} you win
          </h1>
          <p className="text-lg">the trys: {props.worngTry}</p>
          <p className="text-lg">the time: {props.time}</p>
          <div className="mt-4">
            <button
              onClick={props.h}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopupUi;
