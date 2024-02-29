import { ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface NavItemProps {
  dir: string;
  label: string;
  icon: React.ReactNode;
  _id: string;
  active: boolean;
}

const NavItem = ({ dir, icon, label, active }: NavItemProps) => {
  return (
    <Link to={dir}>
      <ListItem
        placeholder={"nav item"}
        className={
          active
          ? "text-red-500 px-10 py-4 hover:text-principal-color bg-white hover:bg-white/100 focus:bg-white/100 focus:text-principal-color active:bg-white/100 active:text-principal-color"
          : "text-white px-10 py-4 hover:text-principal-color hover:bg-white/100"
        }
      >
        <ListItemPrefix placeholder={"nav icon"} className="text-[1.8rem]">
          {icon}
        </ListItemPrefix>
        <Typography placeholder={"label"} className="text-xl">
          {label}
        </Typography>
      </ListItem>
    </Link>
  );
};

export default NavItem;
