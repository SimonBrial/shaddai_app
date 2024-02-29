import BtnFavorite from "../../components/BtnFavorite";
import BtnLayout from "../../components/BtnLayout";
import { LuEye, RiCake3Line } from "../../icons";

const RecipeCard = () => {
  return (
    <div className="shadow-md border-[1px] rounded-[6px] p-5 w-full border-principal-color bg-white hover:bg-principal-color/5 transition-all">
      <h2 className="font-bold text-xl text-principal-color">
        Nombre de la Receta
      </h2>
      <div className="w-full relative flex items-center h-9 py-2">
        <hr className="absolute top-4 bg-principal-color h-1 w-[44%] rounded-lg" />
        <span className="absolute left-[45%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
          <RiCake3Line />
        </span>
        <hr className="absolute top-4 bg-principal-color h-1 w-[44%] right-0 rounded-lg" />
      </div>
      <div className="flex items-center justify-between gap-2">
        <BtnLayout icon={<LuEye />} label="Ver Receta" fullWidth />
        <BtnFavorite />
      </div>
    </div>
  );
};

export default RecipeCard;
