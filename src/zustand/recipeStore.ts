import { create } from "zustand";
import { RecipeField } from "../interface/interface";

interface State {
  ingredientsList: RecipeField[];
  id: string;

  firstName: string;
  lastName: string;
}
interface Action {
  addField: (ingredientList: State["ingredientsList"]) => void;
  deleteField: (id: State["id"], ingredientList: State["ingredientsList"]) => void;
  
  updateFirstName: (firstName: State["firstName"]) => void;
  updateLastName: (lastName: State["lastName"]) => void;
}

// Create the store
const useRecipeStore = create<State & Action>((set) => ({
  // Inicializacion de los valores
  ingredientsList: [{
    _id: crypto.randomUUID(),
    count: "0",
    label: "ingrediente",
    unidad: "unidad",
  }],
  id: "",

  // Actualizacion o manipulacion de las variables
  addField: () => set((state) => ({ingredientsList: ingredientList[...state.ingredientsList, {
    _id: crypto.randomUUID(),
    count: "0",
    label: "ingrediente",
    unidad: "unidad",
  }]})),

  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default useRecipeStore;

/*
ingredientsList: [],
  id: "",
  addField: (ingredientList: RecipeField[]) => {
      set({ ingredientsList: [...ingredientList] }),
  deleteField: (id: string, ingredientsList) =>
    set(() => ingredientsList.filter((field: RecipeField) => field._id !== id)),
*/
