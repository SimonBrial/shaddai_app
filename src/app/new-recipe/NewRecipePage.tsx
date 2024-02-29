import { useState } from "react";
import HorizontalInput from "../../components/HorizontalInput";
import TitleLayout from "../../components/TitleLayout";
import { HiOutlineDocumentAdd, IoAddCircleOutline } from "../../icons";

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
  }
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen">
      <TitleLayout
        icon={<HiOutlineDocumentAdd />}
        title="Nueva Receta"
        withIcon
      />
      <div className="flex w-full gap-4 h-full">
        <div className="border-principal-color border-[1px] h-full w-full rounded-[6px] shadow-md p-3 flex flex-col gap-2">
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
        <div className="border-principal-color border-[1px] h-full w-full rounded-[6px] shadow-md p-3"></div>
      </div>
    </div>
  );
};

export default NewRecipePage;
