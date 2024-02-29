import { Typography } from "@material-tailwind/react";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const TitleLayout = ({
  withIcon,
  title,
  icon,
}: {
  title: string;
  withIcon: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 text-principal-color cursor-default">
        {withIcon ? <span className="text-[2.5rem]">{icon}</span> : <></>}
        <Typography placeholder={"titulo"} className="text-2xl">
          {capitalizeFirstLetter(title)}
        </Typography>
      </div>
      <hr className="bg-principal-color h-1 rounded-lg" />
    </div>
  );
};

export default TitleLayout;
