import { useState } from "react";
import { IoAddCircleOutline, IoClose, RiCake3Line } from "../../icons";

const AddDescriptionContainer = () => {
  const [content, setContent] = useState("");
  return (
    <div className="border-principal-color border-[1px] flex flex-col gap-2 item h-[30rem] sm:h-full w-full rounded-[6px] shadow-md p-3">
      <label className="w-full text-principal-color text-lg text-center -mb-2">
        Agregar Descripcion
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
      <textarea
        onChange={(e) => setContent(e.target.value)}
        className="rounded-[6px] h-full p-2 text-principal-color placeholder:text-principal-color/30 border-principal-color custom-scrollbar"
        placeholder="Introduce una descripcion"
        name="description"
      ></textarea>
      <div className="flex gap-2 w-full">
        <button className="shadow-md w-full flex items-center justify-center gap-2 px-2 sm:px-6 py-2 text-principal-color bg-white border-principal-color border-2 rounded-[6px] hover:bg-principal-color/5 transition-all">
          <span className="text-[1.8rem]">
            <IoClose />
          </span>
          <p className="font-bold">Cancelar</p>
        </button>
        <button
          onClick={() => console.log("prueba")}
          disabled={content !== "" ? false : true}
          className="shadow-md w-full flex items-center justify-center gap-2 px-3 sm:px-6 py-2 text-white bg-gradient-to-l from-principal-color to-secondary-color rounded-[6px] hover:opacity-90 transition-all"
        >
          <span className="text-[1.8rem]">
            <IoAddCircleOutline />
          </span>
          <p className="font-bold">Crear Receta</p>
        </button>
      </div>
    </div>
  );
};

export default AddDescriptionContainer;
