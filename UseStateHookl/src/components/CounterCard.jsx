import { useState } from "react";

function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-amber-500 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Counter Card</h2>

      <p className="text-4xl mb-4">{count}</p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => count > 0 && setCount((prevCount) => prevCount - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-amber-950 text-white px-4 py-2 rounded500  rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default CounterCard;
