import React, { useState, useEffect, useContext } from "react";
import Context from "../../../dataContext/Context";

/**
 * Timer component for tracking elapsed time during the game.
 * @param {Object} props - Component props.
 * @param {Function} props.getTime - Function to update the elapsed time.
 * @returns {JSX.Element} - Rendered Timer component.
 */
const Timer = (props) => {
  // State to store the elapsed time
  const [time, setTime] = useState(0);

  // Access game context
  const ctx = useContext(Context);

  // Effect to start or stop the timer based on game state
  useEffect(() => {
    let interval;

    if (ctx.startTimer && !ctx.winPlay) {
      // Start the timer interval
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [ctx.startTimer, ctx.winPlay]);

  // Effect to update parent component with the elapsed time when game ends
  useEffect(() => {
    if (!ctx.startTimer && ctx.winPlay) {
      // Update parent component with the formatted elapsed time
      props.getTime(formatTime(time));
    }
  }, [ctx.startTimer, ctx.winPlay, time, props]);

  // Effect to reset the timer when game restarts
  useEffect(() => {
    if (!ctx.winPlay && !ctx.startTimer) {
      // Reset the elapsed time
      setTime(0);
    }
  }, [ctx.winPlay, ctx.startTimer]);

  return (
    <div className="">
      <span className="text-lg font-semibold">Time Elapsed: </span>
      {/* Display the formatted elapsed time */}
      <span className="text-xl font-bold text-blue-500">
        {formatTime(time)}
      </span>
    </div>
  );
};

/**
 * Formats the elapsed time into a readable format (MM:SS).
 * @param {number} time - Elapsed time in seconds.
 * @returns {string} - Formatted time string (MM:SS).
 */
const formatTime = (time) => {
  // Calculate minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  // Return formatted time string
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default Timer;
