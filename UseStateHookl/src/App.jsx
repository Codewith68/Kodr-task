import CounterCard from "./components/CounterCard";
import NameCard from "./components/NameCard";
import UserCard from "./components/UserCard";
import VisibilityCard from "./components/VisibilityCard";


function App() {
  return (
    <div className="min-h-screen bg-black p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <CounterCard />
        <NameCard />
        <UserCard />
        <VisibilityCard />
      </div>
    </div>
  )
}

export default App;