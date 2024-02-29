import { Typography } from "@material-tailwind/react";
import { RiCake3Line } from "../../icons";

type reminderCardType = "normal" | "warning" | "danger";

const ReminderCard = ({
  description,
  cardType,
  title,
}: {
  description: string;
  cardType: reminderCardType;
  title: string;
}) => {
  if (cardType === "normal") {
    return (
      <section className="grid place-items-center w-full touch-auto" onClick={(e) => console.log("click!!", e.target)}>
        <details className="flex flex-row gap-2 items-center w-full bg-normal-color/30 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500">
          <summary className="flex flex-row gap-2 items-center px-3 py-1.5 outline-none cursor-pointer font-semibold  list-none before:bg-none">
            <span className={`text-[1.6rem] text-normal-color`}>
              <RiCake3Line />
            </span>
            <hr className={`bg-normal-color h-5 w-1 rounded-[6px]`} />
            <Typography
              placeholder={"reminder card description"}
              className={`text-lg text-normal-color `}
            >
              {title}
            </Typography>
          </summary>
          <hr className=" w-11/12 mx-auto rounded-[6px] border-normal-color" />
          <p className="mb-2 px-5 py-1.5">{description} 😎</p>
        </details>
      </section>
    );
  } else if (cardType === "danger") {
    return (
      <section className="grid place-items-center w-full touch-auto" onClick={(e) => console.log("click!!", e.target)}>
        <details className="flex flex-row gap-2 items-center w-full bg-principal-color/30 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500">
          <summary className="flex flex-row gap-2 items-center px-3 py-1.5 outline-none cursor-pointer font-semibold  list-none before:bg-none">
            <span className={`text-[1.6rem] text-principal-color`}>
              <RiCake3Line />
            </span>
            <hr className={`bg-principal-color h-5 w-1 rounded-[6px]`} />
            <Typography
              placeholder={"reminder card description"}
              className={`text-lg text-principal-color `}
            >
              {title}
            </Typography>
          </summary>
          <hr className=" w-11/12 mx-auto rounded-[6px] border-principal-color" />
          <p className="mb-2 px-5 py-1.5">{description} 😎</p>
        </details>
      </section>
    );
  } else {
    return (
      <section className="grid place-items-center w-full touch-auto" onClick={(e) => console.log("click!!", e.target)}>
        <details className="flex flex-row gap-2 items-center w-full bg-warning-color/30 rounded-xl shadow-md group mx-auto overflow-hidden max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-500">
          <summary className="flex flex-row gap-2 items-center px-3 py-1.5 outline-none cursor-pointer font-semibold  list-none before:bg-none">
            <span className={`text-[1.6rem] text-warning-color`}>
              <RiCake3Line />
            </span>
            <hr className={`bg-warning-color h-5 w-1 rounded-[6px]`} />
            <Typography
              placeholder={"reminder card description"}
              className={`text-lg text-warning-color `}
            >
              {title}
            </Typography>
          </summary>
          <hr className=" w-11/12 mx-auto rounded-[6px] border-warning-color" />
          <p className="mb-2 max-w-[18rem] px-5 py-1.5 text-balance">{description} 😎</p>
        </details>
      </section>
    );
  }
};

export default ReminderCard;
