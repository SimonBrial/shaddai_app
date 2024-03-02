import { useState } from "react";
import { RecipeField } from "../../interface/interface";
import HorizontalInput from "../../components/HorizontalInput";
import { IoAddCircleOutline, RiCake3Line } from "../../icons";

const recipeArrayFake: RecipeField[] = [
  {
    _id: crypto.randomUUID(),
    count: "0",
    label: "ingrediente",
    unidad: "unidad",
  },
];

const RecipeFieldList = () => {
  const [arrayLenght, setArrayLenght] =
    useState<RecipeField[]>(recipeArrayFake);
  // Agrega un nuevo elemento al array
  const addNewField = () => {
    setArrayLenght((prevState) => [
      ...prevState,
      {
        _id: crypto.randomUUID(),
        count: "0",
        label: "ingrediente",
        unidad: "unidad",
      },
    ]);
  };
  return (
    <div className="border-principal-color border-[1px] h-[30rem] sm:h-full w-full rounded-[6px] shadow-md p-3 flex flex-col gap-2 overflow-auto custom-scrollbar touch-auto">
      <label className="w-full text-principal-color text-lg text-center -mb-2">
        Lista de Ingredientes
      </label>
      {/* ------------------------------------------------ Divider ------------------------------------------------ */}
      <div className="w-full relative flex items-center h-9 py-2 pb-5 sm:pb-0">
        <hr className="absolute top-4 bg-principal-color h-1 w-[45%] sm:w-[46%] rounded-lg" />
        <span className="absolute left-[45.55%] sm:left-[46.4%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
          <RiCake3Line />
        </span>
        <hr className="absolute top-4 bg-principal-color h-1 w-[45%] sm:w-[46%] right-0 rounded-lg" />
      </div>
      {/* ------------------------------------------------ Divider ------------------------------------------------ */}
      {/* Se coloco el "_" solo por cuestiones de compilado */}
      {arrayLenght.map((_, index) => (
        <HorizontalInput index={index + 1} key={index} />
      ))}
      <button
        onClick={addNewField}
        className="flex items-center justify-center w-full p-3 gap-2 border-dashed border-2 border-principal-color shadow-md rounded-[6px] bg-white hover:bg-principal-color/10 transition-all text-principal-color"
      >
        <span className="text-[1.8rem]">
          <IoAddCircleOutline />
        </span>
        <p className="text-lg font-bold">Agregar Campo</p>
      </button>
    </div>
  );
};

export default RecipeFieldList;
