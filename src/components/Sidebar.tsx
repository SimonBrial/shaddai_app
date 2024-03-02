/* eslint-disable react-hooks/exhaustive-deps */
import NavItem from "./NavItem";
import {
  HiOutlineDocumentAdd,
  IoSettingsOutline,
  RiHomeHeartLine,
  LuDatabase,
  LuChefHat,
  IoClose,
  IoMenu,
  IoLogInOutline,
} from "../icons";
import User from "./User";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { SidebarArray } from "../interface/interface";

const sibebarArr: SidebarArray[] = [
  {
    dir: "/user/home",
    label: "Home",
    icon: <RiHomeHeartLine />,
    _id: crypto.randomUUID(),
  },
  {
    dir: "/user/stock",
    label: "Inventario",
    icon: <LuDatabase />,
    _id: crypto.randomUUID(),
  },
  {
    dir: "/user/recipes",
    label: "Recetas",
    icon: <LuChefHat />,
    _id: crypto.randomUUID(),
  },
  {
    dir: "/user/new-recipe",
    label: "Agregar Receta",
    icon: <HiOutlineDocumentAdd />,
    _id: crypto.randomUUID(),
  },
  {
    dir: "/user/settings",
    label: "Ajustes",
    icon: <IoSettingsOutline />,
    _id: crypto.randomUUID(),
  },
];

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const location = useLocation();
  // console.log(show);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = sibebarArr.findIndex((item) => item.dir === currentPath);
    setActiveIndex(currentPath === "/home" ? 0 : activeItem);
  }, [location.pathname]);

  function generateSidebar() {
    return sibebarArr.map((item: SidebarArray, index: number) => {
      const { dir, icon, _id, label } = item;
      return (
        <li>
          <NavItem
            _id={_id}
            dir={dir}
            icon={icon}
            label={label}
            key={_id}
            active={activeIndex === index || location.pathname === dir}
          />
        </li>
      );
    });
  }

  return (
    <>
      <button
        className={
          show
            ? "text-principal-color bg-white w-14 text-4xl flex sm:hidden p-2 right-1 top-0 fixed z-50 active:bg-blue-gray-50 rounded-[6px] transition-all"
            : "text-principal-color  text-4xl flex sm:hidden p-2 right-1 top-1 fixed z-50 active:bg-blue-gray-50 rounded-[6px] transition-all"
        }
        onClick={() => setShow((s) => !s)}
      >
        {show ? <IoMenu /> : <IoClose />}
      </button>
      <aside className="relative w-screen sm:w-[20%]">
        <div
          className={
            show
              ? "hidden fixed z-50 sm:flex flex-col justify-between h-screen w-screen sm:max-w-[16.5rem] p-4 bg-gradient-to-t from-principal-color to-secondary-color rounded-none bg-blue-500"
              : "flex fixed flex-col justify-between sm:hidden z-50 h-screen w-[80%] sm:max-w-[16.5rem p-4 bg-gradient-to-t from-principal-color to-secondary-color rounded-none transition ease-in-out duration-300 translate-x-0"
          }
        >
          <div className="mt-5">
            <div className="mb-2 p-2">
              <User />
            </div>
            <ul className="p-2 flex flex-col gap-2 w-full">
              {generateSidebar()}
            </ul>
          </div>
          <div className="border-[1px] border-white rounded-[6px] mb-10 sm:mb-0">
            <NavItem
              _id={crypto.randomUUID()}
              icon={<IoLogInOutline />}
              label="Salir"
              dir="/"
              active={false}
            />
          </div>
        </div>
        {show ? (
          <div className="hidden fixed bg-black/30 h-screen  w-screen top-0 z-10"></div>
        ) : (
          <div className="bg-black/30 h-screen fixed w-screen top-0 z-10"></div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
