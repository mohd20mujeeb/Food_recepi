
import RecipeItem from "../../components/navbar/recipe-item";
import { GlobalContext } from "../../context";
import { useContext } from "react";
export default function Favorites()
{

   const {favoritesList} = useContext(GlobalContext);


   return (
     <div className="py-8  mt-48 sm:mt-20 container mx-auto flex flex-wrap justify-center gap-10">
       {favoritesList && favoritesList.length > 0 ? (
         favoritesList.map((item) => <RecipeItem item={item} />)
       ) : (
         <div>
           <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
             Nothing is added to favorites.
           </p>
         </div>
       )}
     </div>
   );

}