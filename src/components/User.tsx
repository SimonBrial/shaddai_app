import { Avatar, Card, Typography } from "@material-tailwind/react";

const User = () => {
  return (
    <Card
      placeholder={"user container"}
      className="flex flex-row justify-between p-4 rounded-[10px] w-full"
    >
      <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        placeholder={"user photo"}
        variant="rounded"
      />
      <div className=" w-2/3 m-auto capitalize">
        <Typography
          placeholder={"user name"}
          className="text-[1rem] text-center text-principal-color"
        >
          Simon Briceño
        </Typography>
        <Typography
          placeholder={"user name"}
          className="text-[0.8rem] text-center text-purple-700"
        >
          admin
        </Typography>
        <hr className="bg-principal-color h-0.5" />
      </div>
    </Card>
  );
};

export default User;
