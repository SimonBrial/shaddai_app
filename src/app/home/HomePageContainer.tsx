import TitleLayout from "../../components/TitleLayout";
import { useLocation } from "react-router-dom";
import HomeCard from "./HomeCard";
import RemindersContainer from "./RemindersContainer";
import ChartContainer from "./ChartContainer";
import { RiCake3Line, RiHomeHeartLine } from "../../icons";

const HomePageContainer = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <div className="p-5 sm:p-10 sm:pt-4 w-full flex flex-col gap-3 h-screen sm:scroll-smooth sm:snap-y sm:max-h-screen sm:overflow-y-auto sm:overflow-hidden sm:no-scrollbar">
      <div className="flex flex-col gap-0 ">
        <TitleLayout
          title={path[path.length - 1]}
          icon={<RiHomeHeartLine />}
          withIcon
        />
        <div className="grid grid-flow-row sm:grid-cols-3 gap-2 p-2 w-full">
          <HomeCard label="Ventas Semanales" total={6} />
          <HomeCard label="Ventas Diarias" total={6} />
          <HomeCard label="Recordatorios" total={6} />
        </div>
      </div>
      <div className="w-full relative flex items-center h-9 py-2">
        <hr className="absolute top-4 bg-principal-color h-1 w-[45%] rounded-lg" />
        <span className="absolute left-[46%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
          <RiCake3Line />
        </span>
        <hr className="absolute top-4 bg-principal-color h-1 w-[45%] right-0 rounded-lg" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-start h-full">
        <ChartContainer />
        <RemindersContainer />
      </div>
    </div>
  );
};

export default HomePageContainer;
