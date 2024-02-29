import { useState } from "react";
import { IoSearch } from "../icons";

const SearchInput = () => {
  const [text, setText] = useState<string>("");
  console.log(text);
  return (
    <div className="relative w-full sm:w-auto">
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Buscar Receta"
        className="w-full rounded-[6px] border-principal-color text-principal-color pl-10 pr-3 py-2 placeholder:text-principal-color/50 shadow-md focus:ring-principal-color focus:border-none active:border-none"
      />
      <span className="absolute inset-y-0 left-0 flex items-center text-2xl text-principal-color pl-2">
        <IoSearch />
      </span>
    </div>
  );
};

export default SearchInput;
