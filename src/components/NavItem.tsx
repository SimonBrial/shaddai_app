import { ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface NavItemProps {
  dir: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
}

const NavItem = ({ dir, icon, label, active }: NavItemProps) => {
  return (
    <>
      {active ? (
        <Link to={dir}>
          <ListItem
            placeholder={"nav item"}
            className="flex justify-center text-principal-color hover:text-principal-color px-10 py-4 bg-white hover:bg-white/100 focus:bg-white/100 focus:text-principal-color"
          >
            <ListItemPrefix placeholder={"nav icon"} className="text-[1.8rem]">
              {icon}
            </ListItemPrefix>
            <Typography placeholder={"label"} className="text-xl">
              {label}
            </Typography>
          </ListItem>
        </Link>
      ) : (
        <Link to={dir}>
          <ListItem
            placeholder={"nav item"}
            className="text-white hover:text-principal-color px-10 py-4 bg-transparent hover:bg-white flex justify-center"
          >
            <ListItemPrefix placeholder={"nav icon"} className="text-[1.8rem]">
              {icon}
            </ListItemPrefix>
            <h2 className="text-xl">{label}</h2>
          </ListItem>
        </Link>
      )}
    </>
  );
};

export default NavItem;
