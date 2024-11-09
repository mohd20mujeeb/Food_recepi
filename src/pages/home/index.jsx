import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/navbar/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait</div>;

  return (
    <div className="py-8 container mt-20 w-screen h-screen mx-auto overflow-scroll flex flex-wrap justify-center gap-10 home">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-5xl drop-shadow-xl text-white text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}
