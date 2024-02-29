import { Card, Typography } from "@material-tailwind/react";

const HomeCard = ({ label, total }: { label: string; total: number }) => {
  return (
    <Card placeholder={"home card"} className="w-full p-2 bg-gradient-to-b from-principal-color to-pink-200 cursor-default">
      <Typography placeholder={"title"} className="text-xl font-bold px-5 py-2 text-center text-white">
        {label}
      </Typography>
      <div className="p-2 sm:p-3 border-[1px] border-white rounded-[6px]">
        <div className="px-4 py-3 bg-white rounded-[4px]">
          <Typography placeholder={"total"} className="text-principal-color text-center font-bold text-lg">Total: {total}</Typography>
        </div>
      </div>
    </Card>
  );
};

export default HomeCard;
