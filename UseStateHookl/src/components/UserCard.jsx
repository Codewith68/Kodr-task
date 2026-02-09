import { useState } from "react"

function UserCard() {
  const [user, setUser] = useState({
    name: "Subrat",
    role: "Student"
  })

  return (
    <div className="bg-amber-600 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">User Card</h2>

      <p className="font-semibold">Name: {user.name}</p>
      <p className="mb-14 font-semibold">Role: {user.role}</p>

      <button
        onClick={() => setUser({ name: "Subrat", role: "Developer" })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Promote to Developer
      </button>
    </div>
  )
}
export default UserCard