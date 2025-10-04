import { use, useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(0);
  function handleStepSub() {
    step >= 1 && setStep((s) => s - 1);
  }
  function handleStepAdd() {
    setStep((s) => s + 1);
  }

  const [count, setCount] = useState(0);
  function handleCountSub() {
    setCount((c) => c - step);
  }
  function handleCountAdd() {
    setCount((c) => c + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container_counter">
      <div className="counter">
        <button onClick={handleStepSub}>-</button>
        <h2>Step: {step}</h2>
        <button onClick={handleStepAdd}>+</button>
      </div>

      <div className="counter">
        <button onClick={handleCountSub}>-</button>
        <h2>Count: {count}</h2>
        <button onClick={handleCountAdd}>+</button>
      </div>

      <h2>
        <span>
          {count === 0
            ? "Today is"
            : count >= 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </h2>
    </div>
  );
}
