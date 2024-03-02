import { RiCake3Line } from "../../icons";
import { Disclosure, Transition } from "@headlessui/react";

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
      <Disclosure>
        {({ open }) => (
          <div
            className="grid place-items-center w-full touch-auto bg-normal-color/30 rounded-[6px] py-1"
            onClick={(e) => console.log("click!!", e.target)}
          >
            <Disclosure.Button className=" gap-2 items-center w-full  ">
              <div className="flex flex-row gap-2 items-center px-3 py-1.5 outline-none cursor-pointer font-semibold  list-none before:bg-none">
                <span className={`text-[1.6rem] text-normal-color`}>
                  <RiCake3Line />
                </span>
                <hr className={`bg-normal-color h-5 w-1 rounded-[6px]`} />
                <h2 className={`text-lg text-normal-color `}>{title}</h2>
              </div>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                static
                className="px-4 pb-2 pt-1 text-md text-normal-color text-left"
              >
                {description} 😎
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    );
  } else if (cardType === "danger") {
    return (
      <Disclosure>
        {({ open }) => (
          <div
            className="grid place-items-center w-full touch-auto bg-principal-color/30 rounded-[6px] py-1"
            onClick={(e) => console.log("click!!", e.target)}
          >
            <Disclosure.Button className=" gap-2 items-center w-full  ">
              <div className="flex flex-row gap-2 items-center px-3 py-1.5 outline-none cursor-pointer font-semibold  list-none before:bg-none">
                <span className={`text-[1.6rem] text-principal-color`}>
                  <RiCake3Line />
                </span>
                <hr className={`bg-principal-color h-5 w-1 rounded-[6px]`} />
                <h2 className={`text-lg text-principal-color `}>{title}</h2>
              </div>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                static
                className="px-4 pb-2 pt-1 text-md text-principal-color text-left"
              >
                {description} 😎
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    );
  } else {
    return (
      <Disclosure>
        {({ open }) => (
          <div
            className="grid place-items-center w-full touch-auto bg-warning-color/20 rounded-[6px] py-1"
            onClick={(e) => console.log("click!!", e.target)}
          >
            <Disclosure.Button className=" gap-2 items-center w-full  ">
              <div className="flex flex-row gap-2 items-center px-3 py-1.5 outline-none cursor-pointer font-semibold  list-none before:bg-none">
                <span className={`text-[1.6rem] text-warning-color`}>
                  <RiCake3Line />
                </span>
                <hr className={`bg-warning-color h-5 w-1 rounded-[6px]`} />
                <h2 className={`text-lg text-warning-color `}>{title}</h2>
              </div>
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                static
                className="px-4 pb-2 pt-1 text-md text-warning-color text-left"
              >
                {description} 😎
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    );
  }
};

export default ReminderCard;
