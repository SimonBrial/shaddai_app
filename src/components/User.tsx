const User = () => {
  return (
    <div className="flex flex-row justify-between p-4 rounded-[10px] w-full bg-white">
      <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt={"user photo"}
        className="rounded-md w-[3rem]"
      />
      <div className=" w-2/3 m-auto capitalize">
        <p className="text-[1rem] text-center text-principal-color">
          Simon Briceño
        </p>
        <p className="text-[0.8rem] text-center text-purple-700">admin</p>
        <hr className="bg-principal-color h-0.5" />
      </div>
    </div>
  );
};

export default User;
