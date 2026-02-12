import { useState } from "react";

function UserCard() {
  const [user, setUser] = useState({
    name: "Subrat",
    role: "Student"
  });

  return (
    <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-amber-800 mb-4">
        User Card
      </h2>

      <p className="text-white font-medium">Name: {user.name}</p>
      <p className="text-white mb-10 font-medium">Role: {user.role}</p>

      <button
        onClick={() => setUser({ name: "Subrat", role: "Developer" })}
        className="border border-gray-500 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Promote to Developer
      </button>
    </div>
  );
}

export default UserCard;
