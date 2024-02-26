import { Card, List } from "@material-tailwind/react";
import NavItem from "./NavItem";
import {
  IoSettingsOutline,
  RiHomeHeartLine,
  LuDatabase,
  LuChefHat,
} from "../icons";
import User from "./User";

const Sidebar = () => {
  return (
    <Card
      placeholder={"card"}
      className="h-screen w-full max-w-[20rem] p-4 bg-gradient-to-t from-principal-color to-secondary-color rounded-none"
    >
      <div className="mb-2 p-4">
        <User />
      </div>
      <List placeholder={"sidebar"} className="p-4">
        <NavItem dir="/home" label="Home" icon={<RiHomeHeartLine />} active />
        <NavItem
          dir="/home/stock"
          label="Inventario"
          icon={<LuDatabase />}
          active={false}
        />
        <NavItem
          dir="/home/recipes"
          label="Recetas"
          icon={<LuChefHat />}
          active={false}
        />
        <NavItem
          dir="/home/settings"
          label="Ajustes"
          icon={<IoSettingsOutline />}
          active={false}
        />
      </List>
    </Card>
  );
};

export default Sidebar;
