
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Navbar from "./components/navbar";
import Spinner from "./components/loader/Spinner";
import { useContext } from "react";
import { GlobalContext } from "./context";
 

function App() {
  const { loading} = useContext(GlobalContext);
  
  return (
    <div className="app relative">
    {loading && <div className="fixed z-50 w-full h-full flex items-center justify-center">
      <Spinner />
    </div>}
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
