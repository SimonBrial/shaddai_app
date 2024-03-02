import BtnFavorite from "../../components/BtnFavorite";
import { LuEye, RiCake3Line } from "../../icons";
import { Disclosure, Transition } from "@headlessui/react";

const RecipeCard = () => {
  return (
    <div className="shadow-md border-[1px] rounded-[6px] p-5 w-full border-principal-color bg-white hover:bg-principal-color/5 transition-all">
      <h2 className="font-bold text-xl text-principal-color">
        Nombre de la Receta
      </h2>
      <div className="w-full relative flex items-center h-9 py-2">
        <hr className="absolute top-4 bg-principal-color h-1 w-[44%] rounded-lg" />
        <span className="absolute left-[45%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
          <RiCake3Line />
        </span>
        <hr className="absolute top-4 bg-principal-color h-1 w-[44%] right-0 rounded-lg" />
      </div>
      <div className="flex items-start justify-between gap-2">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-col w-full">
                <div className="flex gap-2">
                  <Disclosure.Button className="shadow-md bg-gradient-to-l from-principal-color to-secondary-color hover:opacity-90 transition-all px-[1.5rem] py-[0.6rem] rounded-[6px] text-white font-bold flex gap-2 items-center justify-center w-full">
                    <span className="text-2xl">
                      <LuEye />
                    </span>
                    <p>Ver Receta</p>
                  </Disclosure.Button>
                  <BtnFavorite />
                </div>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static className="px-4 pb-2 pt-4 text-sm text-principal-color">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </Transition>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default RecipeCard;
