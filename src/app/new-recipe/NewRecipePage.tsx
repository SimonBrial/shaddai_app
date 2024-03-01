import { useState } from "react";
import HorizontalInput from "../../components/HorizontalInput";
import TitleLayout from "../../components/TitleLayout";
import {
  HiOutlineDocumentAdd,
  IoAddCircleOutline,
  IoClose,
  RiCake3Line,
} from "../../icons";

interface RecipeArr {
  label: string;
  count: string;
  unidad: string;
  _id: string;
}

const recipeArrayFake: RecipeArr[] = [
  {
    _id: crypto.randomUUID(),
    count: "0",
    label: "ingrediente",
    unidad: "unidad",
  },
];

const NewRecipePage = () => {
  const [arrayLenght, setArrayLenght] = useState<RecipeArr[]>(recipeArrayFake);
  const [content, setContent] = useState("");
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
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen">
      <TitleLayout
        icon={<HiOutlineDocumentAdd />}
        title="Nueva Receta"
        withIcon
      />
      <div className="flex flex-col sm:flex-row w-full gap-4 h-full sm:h-[92%] ">
        <div className="border-principal-color border-[1px] h-full w-full rounded-[6px] shadow-md p-3 flex flex-col gap-2 overflow-auto custom-scrollbar touch-auto">
        <label className="w-full text-principal-color text-lg text-center -mb-2">
            Lista de Ingredientes
          </label>
          <div className="w-full relative flex items-center h-9 py-2">
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] rounded-lg" />
            <span className="absolute left-[46.5%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
              <RiCake3Line />
            </span>
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] right-0 rounded-lg" />
          </div>
          {arrayLenght.map((inputField: RecipeArr, index) => (
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
        <div className="border-principal-color border-[1px] flex flex-col gap-2 item h-full w-full rounded-[6px] shadow-md p-3">
          <label className="w-full text-principal-color text-lg text-center -mb-2">
            Agregar Descripcion
          </label>
          <div className="w-full relative flex items-center h-9 py-2">
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] rounded-lg" />
            <span className="absolute left-[46.5%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
              <RiCake3Line />
            </span>
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] right-0 rounded-lg" />
          </div>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="rounded-[6px] h-full p-2 text-principal-color placeholder:text-principal-color/30 border-principal-color custom-scrollbar"
            placeholder="Introduce una descripcion"
            name="description"
          ></textarea>
          <div className="flex gap-2 w-full">
            <button className="shadow-md w-full flex items-center justify-center gap-2 px-6 py-2 text-principal-color bg-white border-principal-color border-2 rounded-[6px] hover:bg-principal-color/5 transition-all">
              <span className="text-[1.8rem]">
                <IoClose />
              </span>
              <p className="font-bold">Cancelar</p>
            </button>
            <button
              onClick={() => console.log("prueba")}
              disabled={content !== "" ? false : true}
              className="shadow-md w-full flex items-center justify-center gap-2 px-6 py-2 text-white bg-gradient-to-l from-principal-color to-secondary-color rounded-[6px] hover:opacity-90 transition-all"
            >
              <span className="text-[1.8rem]">
                <IoAddCircleOutline />
              </span>
              <p className="font-bold">Crear Receta</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecipePage;
