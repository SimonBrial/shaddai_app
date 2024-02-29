import SearchInput from "../../components/SearchInput";
import TitleLayout from "../../components/TitleLayout";
import { LuChefHat, RiCake3Line } from "../../icons";
import RecipeCard from "./RecipeCard";

const RecipesPage = () => {
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen">
      <div className="flex flex-col gap-3 h-full ">
        <TitleLayout icon={<LuChefHat />} title="Recetas" withIcon />
        <div className="w-full flex sm:justify-end">
          <div className="flex flex-col sm:flex-row w-full sm:w-1/2 items-center gap-2 justify-end">
            <SearchInput />
            <div className="w-full sm:w-1/2">
              {/* <BtnLayout
                label="Agregar Receta"
                icon={<IoAddCircleOutline />}
                fullWidth
              /> */}
              {/* <BtnAdd fullWidth/> */}
            </div>
          </div>
        </div>
        <div className="w-full relative flex items-center h-9 py-2">
          <hr className="absolute top-4 bg-principal-color h-1 w-[45%] rounded-lg" />
          <span className="absolute left-[46%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
            <RiCake3Line />
          </span>
          <hr className="absolute top-4 bg-principal-color h-1 w-[45%] right-0 rounded-lg" />
        </div>
        <section className="grid grid-flow-row sm:grid-cols-3 gap-2 py-3 pb-8">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </section>
      </div>
    </div>
  );
};

export default RecipesPage;
