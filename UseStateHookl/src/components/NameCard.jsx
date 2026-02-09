import { useState } from "react"


function NameCard() {
  const [user, setUser] = useState({ name: "Subrat" })

  return (
    <div className="bg-amber-500 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Name Card</h2>

      <p className="mb-4 text-lg">Hello {user.name}</p>

      <button
        onClick={() => setUser({ name: "John Doe" })}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Change Name
      </button>
    </div>
  )
}
export default NameCard