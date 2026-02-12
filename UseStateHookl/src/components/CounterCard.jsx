import { useState } from "react";

function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-amber-800 mb-4">
        Counter Card
      </h2>

      <p className="text-4xl text-white mb-4">{count}</p>

      <div className="flex gap-3">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          +
        </button>

        <button
          onClick={() => count > 0 && setCount((prev) => prev - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          -
        </button>

        <button
          onClick={() => setCount(0)}
          className="border border-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterCard;
