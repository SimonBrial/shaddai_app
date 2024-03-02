const HomeCard = ({ label, total }: { label: string; total: number }) => {
  return (
    <div className="w-full p-2 bg-gradient-to-b from-principal-color to-pink-200 cursor-default rounded-[6px] shadow-md">
      <h2 className="text-xl font-bold px-5 py-2 text-center text-white">
        {label}
      </h2>
      <div className="p-2 sm:p-3 border-[1px] border-white rounded-[6px]">
        <div className="px-4 py-3 bg-white rounded-[4px]">
          <h3 className="text-principal-color text-center font-bold text-lg">
            Total: {total}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
