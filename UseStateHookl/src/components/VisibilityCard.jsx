import { useState } from "react"

function VisibilityCard() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="bg-amber-700 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Visibility Card</h2>

      <button
        onClick={() => setIsVisible(!isVisible)}
         className={`px-4 py-2 rounded text-white ${
          isVisible ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && (
        <div className=" mt-6 bg-cyan-300 p-3 rounded text-black">
          This is a secret message that is only visible when the button is clicked.
        </div>
      )}
    </div>
  )
}
export default VisibilityCard