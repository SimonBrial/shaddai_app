const BtnLayout = ({
  label,
  icon,
  fullWidth,
  fn,
}: {
  label: string;
  icon: React.ReactNode;
  fullWidth: boolean;
  fn: () => void;
}) => {
  return (
    <button
      className={`shadow-md bg-gradient-to-l from-principal-color to-secondary-color hover:opacity-90 transition-all px-[1.5rem] py-[0.6rem] rounded-[6px] text-white font-bold flex gap-2 items-center justify-center ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={fn}
    >
      <span className="text-2xl">{icon}</span>
      {label}
    </button>
  );
};

export default BtnLayout;
