import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import TitleLayout from "../../components/TitleLayout";
// import VerticalSelect from "../../components/VerticalSelect";
import { LuDatabase } from "../../icons";
import RecipesTable from "./RecipesTable";

const StockPage = () => {
  const [viewSelect, setViewSelect] = useState("Inventario de Productos");
  console.log(viewSelect);
  const arrayViews: string[] = [
    "Inventario de Productos",
    "Inventario de Ingrediente",
  ];
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen ">
      <div className="flex flex-col gap-3 h-full pb-8">
        <TitleLayout icon={<LuDatabase />} title="Inventario" withIcon />
        <div className="flex items-end flex-col w-full gap-2 sm:gap-2 sm:flex-row justify-between">
          <label
            className={`flex flex-col w-full sm:w-[17rem] text-principal-color`}
          >
            Seleccionar una vista de inventario
            <select
              value={viewSelect}
              onChange={(e) => setViewSelect(e.target.value)}
              name="select stock"
              className="rounded-[6px] border-[1px] border-principal-color text-principal-color px-3 py-2 focus:outline-0 focus:ring-0 shadow-md"
            >
              {arrayViews.map((option, i) => (
                <option
                  className="p-5"
                  value={
                    typeof option === "string" ? option.toLowerCase() : option
                  }
                  key={i}
                >
                  {option}
                </option>
              ))}
              {/* <option selected className="p-5" value="Inventario de Productos">
          Inventario de Productos
        </option>
        <option
          value="Inventario de ingrediente"
          selected
          className="text-principal-color px-1 my-2"
        >
          Inventario de ingrediente
        </option> */}
            </select>
          </label>
          <SearchInput />
        </div>
        <RecipesTable tableSelect={viewSelect} />
      </div>
    </div>
  );
};

export default StockPage;
