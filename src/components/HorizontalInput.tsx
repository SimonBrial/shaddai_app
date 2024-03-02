import { useState } from "react";
import { IoClose } from "../icons";
import { HorizontalInputProps } from "../interface/interface";



const measureUnits: string[] = [
  "gramos",
  "miligramos",
  "kilogramos",
  "onzas",
  "libras",
  "taza",
  "cucharada",
  "cucharadita",
  "litros",
  "mililitros",
  "pizca",
  "puñado",
  "hojas",
  "dientes",
  "ramitas",
  "rebanadas",
  "filetes",
  "rodajas",
  "piezas",
  "tallo",
  "ralladura",
  "chorro",
  "pulgadas",
  "centímetros",
  "unidad",
];

const HorizontalInput = ({ index }: HorizontalInputProps) => {
  const [value, setValue] = useState<string>("");
  const [unit, setUnit] = useState("");
  const [count, setCount] = useState<string>("");
  console.log(value);
  console.log(count);
  console.log(unit);
  return (
    <div className="flex items-center flex-col w-full relative gap-2 shadow-md p-3 rounded-[6px]">
      <div className="flex justify-between w-full">
        <label className="w-full text-principal-color text-lg">
          Ingrediente {index}.
        </label>
        <button className="p-1 rounded-full hover:bg-principal-color/20 transition-all border border-transparent  text-[1.8rem] text-principal-color hover:scale-110 focus:outline-none focus:ring-none focus:ring-transparent">
          <span>
            <IoClose />
          </span>
        </button>
        {/* <div className="p-1 rounded-full hover:bg-principal-color/20 transition-all">
          
        </div> */}
      </div>
      <div className="flex flex-col sm:flex-row gap-1 items-center w-full">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          className="w-full sm:w-[55%] border-[1px] rounded-[6px] border-principal-color text-principal-color px-2 py-2 placeholder:text-principal-color/50focus:ring-principal-color focus:border-none active:border-none"
        />
        <div className="flex gap-1 w-full sm:w-[45%]">
          <input
            type="number"
            id="number"
            min={0}
            max={100}
            placeholder="0"
            onChange={(e) => setCount(e.target.value)}
            className="w-full sm:w-[34%] border-[1px] rounded-[6px] border-principal-color px-2 py-2 placeholder:text-principal-color/50 focus:ring-principal-color focus:border-none active:border-none"
          />
          <select
            onChange={(e) => setUnit(e.target.value)}
            id="currency"
            name="currency"
            className="w-full sm:w-[68%] border-[1px] rounded-[6px] border-principal-color py-0 pl-2 pr-7 focus:ring-inset focus:ring-indigo-600 sm:text-sm  text-principal-color px-3 focus:outline-0 focus:ring-0"
          >
            {measureUnits.map((unit, index) => (
              <option key={index}>{unit}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HorizontalInput;
