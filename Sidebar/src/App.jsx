import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="bg-gray-600/10 h-screen w-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
