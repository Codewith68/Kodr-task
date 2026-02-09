import CounterCard from "./components/CounterCard";
import NameCard from "./components/NameCard";
import UserCard from "./components/UserCard";
import VisibilityCard from "./components/VisibilityCard";

function App() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-6xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CounterCard/>
          </div>
          <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NameCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UserCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VisibilityCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
