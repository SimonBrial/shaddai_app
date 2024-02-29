import VerticalSelect from "../../components/VerticalSelect";
import Pagination from "./Pagination";
import RecipesTableItem from "./RecipesTableItem";
import { RecipesArr } from "../../interface/interface";
import { RiCake3Line } from "../../icons";

const RecipesTable = ({ tableSelect }: { tableSelect: string }) => {
  // TODO: La manipulacion de las vista viene asociado por el estado global, manejado por zustand, asi como los demas datos a mostrar
  const itemCount = [10, 25, 50];
  const recipesArray: RecipesArr[] = [
    { _id: 1, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 2, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 3, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 4, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 5, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 6, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 7, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 8, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 9, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 10, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 11, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
    { _id: 12, recipeName: "Pie de Limon", unidades: 2, inStock: 5 },
  ];
  return (
    <>
      {/* ------------------------------------------------ Table ------------------------------------------------ */}
      {tableSelect === "inventario de productos" || tableSelect === "" ? (
        <>
          <div className="h-[70%] overflow-hidden hidden sm:block">
            <table className="min-w-full h-screen relative overflow-y-auto ">
              <thead className="bg-principal-color/40 absolute w-full border-b-principal-color border-2 border-transparent">
                <tr className="uppercase grid grid-flow-row sm:grid-cols-4 ">
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center "
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center"
                  >
                    Unidades
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center"
                  >
                    Cantidad disponible
                  </th>
                </tr>
              </thead>
              <tbody className="h-[30rem] 2xl:h-[20rem] w-full top-[3.5rem] absolute overflow-hidden overflow-y-auto custom-scrollbar">
                {recipesArray.map((recipe, index) => (
                  <RecipesTableItem
                    item={recipe}
                    key={index}
                    isMobile={false}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:hidden gap-2">
            {recipesArray.map((recipe, index) => (
              <RecipesTableItem item={recipe} key={index} isMobile />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="h-[70%] overflow-hidden hidden sm:block">
            <table className="min-w-full h-screen relative overflow-y-auto ">
              <thead className="bg-principal-color/40 absolute w-full border-b-principal-color border-2 border-transparent">
                <tr className="uppercase grid grid-flow-row sm:grid-cols-4 ">
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center "
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center"
                  >
                    Unidad
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-white font-bold px-6 py-4 text-center"
                  >
                    Cantidad disponible
                  </th>
                </tr>
              </thead>
              <tbody className="h-[30rem] 2xl:h-[20rem] w-full top-[3.5rem] absolute overflow-hidden overflow-y-auto custom-scrollbar">
                {recipesArray.map((recipe, index) => (
                  <RecipesTableItem
                    item={recipe}
                    key={index}
                    isMobile={false}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:hidden gap-2">
            {recipesArray.map((recipe, index) => (
              <RecipesTableItem item={recipe} key={index} isMobile />
            ))}
          </div>
        </>
      )}

      {/* ------------------------------------------------ Table ------------------------------------------------ */}
      {/* ------------------------------------------------ Divider ------------------------------------------------ */}
      <div className="w-full relative flex items-center h-9 py-2 pb-5 sm:pb-0">
        <hr className="absolute top-4 bg-principal-color h-1 w-[45%] sm:w-[48%] rounded-lg" />
        <span className="absolute left-[45.55%] sm:left-[48.3%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
          <RiCake3Line />
        </span>
        <hr className="absolute top-4 bg-principal-color h-1 w-[45%] sm:w-[48%] right-0 rounded-lg" />
      </div>
      {/* ------------------------------------------------ Divider ------------------------------------------------ */}
      {/* ------------------------------------------------ Footer ------------------------------------------------ */}
      <div className="flex gap-2 flex-col sm:flex-row justify-between items-center pb-8 sm:pb-0">
        <div className="w-2/3 hidden sm:block">
          <VerticalSelect
            arrayOptions={itemCount}
            widthInput="sm:w-[11rem]"
            label="Cantidad de Elementos"
          />
        </div>
        <Pagination />
      </div>
      {/* ------------------------------------------------ Footer ------------------------------------------------ */}
    </>
  );
};

export default RecipesTable;
