import { useState } from "react";

const VerticalSelect = ({
  arrayOptions,
  widthInput,
  label,
}: {
  arrayOptions: string[] | number[];
  widthInput: string;
  label: string;
}) => {
  const [viewSelect, setViewSelect] = useState("Inventario de Productos");
  console.log(viewSelect);

  return (
    <label className={`flex flex-col w-full ${widthInput} text-principal-color`}>
      {label}
      <select
        value={viewSelect}
        onChange={(e) => setViewSelect(e.target.value)}
        name="select stock"
        className="rounded-[6px] border-[1px] border-principal-color text-principal-color px-3 py-2 focus:outline-0 focus:ring-0 shadow-md"
      >
        {arrayOptions.map((option, i) => (
          <option
            className="p-5"
            value={typeof option === "string" ? option.toLowerCase() : option}
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
  );
};

export default VerticalSelect;
