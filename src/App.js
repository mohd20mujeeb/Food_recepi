
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app ">
      <div className="min-h-screen h-screen overflow-hidden relative text-gray-600 text-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
