import TitleLayout from "../../components/TitleLayout";
import { HiOutlineDocumentAdd } from "../../icons";
import AddDescriptionContainer from "./AddDescriptionContainer";
import RecipeFieldList from "./RecipeFieldList";

const NewRecipePage = () => {
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 f-full sm:h-screen ">
      <TitleLayout
        icon={<HiOutlineDocumentAdd />}
        title="Nueva Receta"
        withIcon
      />
      <div className="flex flex-col sm:flex-row w-full gap-4 h-full sm:h-[92%] ">
        <RecipeFieldList />
        <AddDescriptionContainer />
      </div>
    </div>
  );
};

export default NewRecipePage;
