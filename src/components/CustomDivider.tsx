import { RiCake3Line } from "../icons";

const CustomDivider = () => {
  return (
    <div className="w-full relative flex items-center h-9 py-2">
      <hr className="absolute top-4 bg-principal-color h-1 w-[48%] rounded-lg" />
      <span className="absolute left-[48.5%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
        <RiCake3Line />
      </span>
      <hr className="absolute top-4 bg-principal-color h-1 w-[48%] right-0 rounded-lg" />
    </div>
  );
};

export default CustomDivider;
