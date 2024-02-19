import React, { useState, useEffect, useContext } from "react";
import Context from "../../dataContext/Context";

const Timer = (props) => {
  const [time, setTime] = useState(0);
  const ctx = useContext(Context);

  useEffect(() => {
    let interval;

    if (ctx.startTimer && !ctx.winPlay) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [ctx.startTimer, ctx.winPlay]);

  useEffect(() => {
    if (!ctx.startTimer && ctx.winPlay) {
      props.getTime(formatTime(time));
    }
  }, [ctx.startTimer, ctx.winPlay, time, props]);

  useEffect(() => {
    if (!ctx.winPlay && !ctx.startTimer) {
      setTime(0);
    }
  }, [ctx.winPlay, ctx.startTimer]);

  return (
    <div className="">
      <span className="text-lg font-semibold">Time Elapsed: </span>
      <span className="text-xl font-bold text-blue-500">
        {formatTime(time)}
      </span>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default Timer;
