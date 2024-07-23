import { useState, useRef } from "react";

// Components
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  //Ref
  const timer = useRef();
  const dialog = useRef();

  // State
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); // time remaining in miliseconds

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    // Clear the timer
    clearInterval(timer.current);

    // Open dialog
    dialog.current.open();
  }

  function handleStart() {
    // Update the time remaining
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleReset() {
    // Reset the timer
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    //open dialog
    dialog.current.open();

    // Clear the timer
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}{" "}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
