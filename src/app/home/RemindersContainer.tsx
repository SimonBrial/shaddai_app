import TitleLayout from "../../components/TitleLayout";
import ReminderCard from "./ReminderCard";

type reminderCardType = "normal" | "warning" | "danger";
const RemindersContainer = () => {
  const cardArray: {
    description: string;
    type: reminderCardType;
    title: string;
  }[] = [
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    { description: "Prueba", type: "danger", title: "title test" },
    { description: "Prueba 2", type: "normal", title: "title test" },
    {
      description:
        "Prueba 3 prueba de longitud de texto ksdhkajsd akgsdkjasdkj dasdhasjh  lksdlas dh jklahsdjashdjh kj hjh kjh kjh sa",
      type: "warning",
      title: "title test",
    },
  ];
  return (
    <div className="pb-10 sm:p-0 flex flex-col w-full sm:w-1/3 gap-2 h-[20rem] sm:h-[34.65rem]">
      <TitleLayout title="Recordatorios" icon withIcon={false} />
      <div className="w-full flex flex-col gap-2 p-2 border-[1px] border-principal-color rounded-[6px] h-full scroll-smooth snap-y max-h-screen overflow-y-auto overflow-auto no-scrollbar touch-auto ">
          {cardArray.map((card) => (
            <ReminderCard
              description={card.description}
              cardType={card.type}
              title={card.title}
            />
          ))}
        </div>
    </div>
  );
};

export default RemindersContainer;
