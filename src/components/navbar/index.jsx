import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
export default function Navbar() {
  const { searchParam, setSearchParam,handleSubmit} = useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="flex justify-between border-b-2 items-center py-5 container mx-auto fixed min-w-screen px-10 bg-white/95 overflow-hidden z-50 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl hover:scale-105 ease-linear duration-100 font-semibold">
        <NavLink to="/" className="text-black text-3xl font-bold drop-shadow-xl ">FoodRecipe.®</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-5  rounded-xl border outline-none lg:w-96 shadow-lg shadow-black-100 focus:shadow-black-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className="text-black font-semibold hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="text-black font-semibold hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
