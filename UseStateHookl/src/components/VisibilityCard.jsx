import { useState } from "react"

function VisibilityCard() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-amber-800 mb-4">
        Visibility Card
      </h2>

      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`px-4 py-2 rounded text-white transition ${
          isVisible
            ? "border border-gray-500 hover:bg-gray-800"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && (
        <div className="mt-6 border border-cyan-600 text-cyan-400 p-3 rounded-lg">
          Hello, This message is controlled by useState boolean value.
        </div>
      )}
    </div>
  )
}

export default VisibilityCard
