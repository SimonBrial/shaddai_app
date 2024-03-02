// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaStar,
} from "../icons";
import { useState } from "react";

const BtnFavorite = () => {
  const [added, setAdded] = useState<boolean>(false);
  /* const notify = () =>
    toast.custom(
      (t) => (
        <>
          {!added ? (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-md shadow-blue-gray-100/30 rounded-lg pointer-events-auto flex mb-10 sm:mb-0 border-principal-color border-[1px]`}
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center ">
                    <span className="text-[2rem] p-1 text-white bg-green-400 rounded-full">
                      <IoCheckmarkCircleOutline />{" "}
                    </span>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-md font-medium text-gray-900">
                        Receta agregada a Favoritos
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Añadiste la receta... a la lista de favoritos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex absolute right-2 top-2 p-1 rounded-full hover:bg-principal-color/20 transition-all">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent  text-[1.8rem] text-principal-color hover:scale-110 focus:outline-none focus:ring-none focus:ring-transparent"
                >
                  <span>
                    <IoClose />
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-md shadow-blue-gray-100/30 rounded-lg pointer-events-auto flex relative mb-10 sm:mb-0 border-principal-color border-[1px]`}
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center ">
                    <span className="text-[2rem] p-1 text-white bg-red-500 rounded-full">
                      <IoCloseCircleOutline />{" "}
                    </span>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-md font-medium text-gray-900">
                        Receta eliminada de Favoritos
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Eliminaste la receta... de la lista de favoritos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex absolute right-2 top-2 p-1 rounded-full hover:bg-principal-color/20 transition-all">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent  text-[1.8rem] text-principal-color hover:scale-110 focus:outline-none focus:ring-none focus:ring-transparent"
                >
                  <span>
                    <IoClose />
                  </span>
                </button>
              </div>
            </div>
          )}
        </>
      ),
      {
        position: "bottom-right",
        duration: 2000
      },
    ); */
  return (
    <>
      <button
        className="shadow-md bg-gradient-to-l from-principal-color to-secondary-color hover:opacity-90 transition-all px-[1.5rem] py-[0.6rem] rounded-[6px] text-white font-bold flex gap-2 items-center justify-center"
        onClick={() => {
          // notify();
          setAdded((a) => !a);
        }}
      >
        <span
          className={`text-2xl ${added ? "text-yellow-300" : "text-white"}`}
        >
          <FaStar />
        </span>
      </button>
      {/* <ToastContainer /> */}
    </>
  );
};

export default BtnFavorite;
