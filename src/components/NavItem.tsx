import { Link } from "react-router-dom";
import { NavItemProps } from "../interface/interface";

const NavItem = ({ dir, icon, label, active }: NavItemProps) => {
  return (
    <Link to={dir}>
      <div
        className={
          active
            ? "text-principal-color px-10 py-4 hover:text-principal-color bg-white hover:bg-white/100 focus:bg-white/100 focus:text-principal-color active:bg-white/100 active:text-principal-color rounded-[6px] flex items-center gap-2"
            : "text-white px-10 py-4 hover:text-principal-color hover:bg-white/100 rounded-[6px] flex items-center gap-2"
        }
      >
        <span className="text-[1.8rem]">{icon}</span>
        <h1 className="text-xl">{label}</h1>
      </div>
    </Link>
  );
};

export default NavItem;
