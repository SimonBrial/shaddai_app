import { IoChevronBackOutline, IoChevronForward } from "../../icons";

const Pagination = () => {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 hover:bg-principal-color/30 transition-all cursor-pointer border-[1px] border-principal-color rounded-[6px] flex items-center justify-center shadow-md">
        <span>
          <IoChevronBackOutline />
        </span>
      </div>
      <div className="w-10 h-10 hover:bg-principal-color/30 transition-all cursor-pointer border-[1px] border-principal-color rounded-[6px] flex items-center justify-center shadow-md bg-gradient-to-t from-principal-color to-pink-400 text-white">
        <h2>
          1
        </h2>
      </div>
      <div className="w-10 h-10 hover:bg-principal-color/30 transition-all cursor-pointer border-[1px] border-principal-color rounded-[6px] flex items-center justify-center shadow-md">
        <h2>
          2
        </h2>
      </div>
      <div className="w-10 h-10 hover:bg-principal-color/30 transition-all cursor-pointer border-[1px] border-principal-color rounded-[6px] flex items-center justify-center shadow-md">
        <span>
          <IoChevronForward />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
