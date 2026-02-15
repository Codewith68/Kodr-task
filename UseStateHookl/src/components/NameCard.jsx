import { useState } from "react";

function NameCard() {
  const [user, setUser] = useState({ name: "Subrat" });

  return (
    <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-amber-800 mb-4">
        Name Card
      </h2>

      <p className="mb-4 text-lg text-white">
        Hello {user.name}
      </p>

      <button
        onClick={() => setUser({ name: "John Doe" })}
        className="border border-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Change Name
      </button>
    </div>
  );
}

export default NameCard;
