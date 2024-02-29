import { RiCake3Line } from "../../icons";
import { RecipesArr } from "../../interface/interface";

interface RecipesItemProps {
  item: RecipesArr;
  isMobile: boolean;
}

const RecipesTableItem = ({ item, isMobile }: RecipesItemProps) => {
  return (
    <>
      {!isMobile ? (
        <tr className=" hover:bg-red-100 transition-all border-b-[1px] border-b-principal-color grid grid-flow-row sm:grid-cols-4 ">
          <th
            scope="col"
            className="text-center text-sm font-medium text-gray-900 px-6 py-4"
          >
            {item._id}
          </th>
          <th
            scope="col"
            className="text-center text-sm font-medium text-gray-900 px-6 py-4"
          >
            {item.recipeName}
          </th>
          <th
            scope="col"
            className="text-center text-sm font-medium text-gray-900 px-6 py-4"
          >
            {item.unidades}
          </th>
          <th
            scope="col"
            className="text-center text-sm font-medium text-gray-900 px-6 py-4"
          >
            {item.inStock}
          </th>
        </tr>
      ) : (
        <div className="w-full border-[1px] border-principal-color rounded-[6px] p-4 shadow-md">
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 text-principal-color">
              <p className="px-[0.7rem] rounded-[6px] bg-principal-color font-bold text-white">
                {item._id}
              </p>
            </div>
            <div className="bg-principal-color/20 w-full text-center text-principal-color px-4 rounded-[6px] border-principal-color border-[1px] font-bold text-[1.2rem]">
              <p>{item.recipeName}</p>
            </div>
          </div>
          <div className="w-full relative flex items-center h-9 py-2">
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] rounded-lg" />
            <span className="absolute left-[45%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
              <RiCake3Line />
            </span>
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] right-0 rounded-lg" />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center text-principal-color px-4 rounded-[6px] border-principal-color border-[1px]">
              <p className="text-center text-principal-color font-bold text-[0.8rem]">
                Unidad
              </p>
              <p className="font-bold">{item.unidades}</p>
            </div>
            <div className="flex gap-1 items-center text-principal-color px-4 rounded-[6px] border-principal-color border-[1px]">
              <p className="text-center text-principal-color  font-bold text-[0.8rem]">
                Stock
              </p>
              <p className="font-bold">{item.inStock}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipesTableItem;
