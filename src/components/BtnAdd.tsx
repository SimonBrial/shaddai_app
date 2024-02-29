import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoAddCircleOutline } from "../icons";

const BtnAdd = ({ fullWidth }: { fullWidth: boolean }) => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <Button
        placeholder={"btnAdd"}
        onClick={openDrawer}
        className={`shadow-md bg-gradient-to-l from-principal-color to-secondary-color hover:opacity-90 transition-all px-[1.5rem] py-[0.6rem] rounded-[6px] text-white font-bold flex gap-2 items-center justify-center ${
          fullWidth ? "w-full" : ""
        }`}
      >
        <span className="text-2xl"><IoAddCircleOutline/></span>
        Agregar Receta
      </Button>
      <Drawer
        placeholder={"btnAdd"}
        size={400}
        open={open}
        onClose={closeDrawer}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography placeholder={"btnAdd"} variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton
            placeholder={"btnAdd"}
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography
          placeholder={"btnAdd"}
          color="gray"
          className="mb-8 pr-4 font-normal"
        >
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button placeholder={"btnAdd"} size="sm" variant="outlined">
            Documentation
          </Button>
          <Button placeholder={"btnAdd"} size="sm">
            Get Started
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default BtnAdd;
