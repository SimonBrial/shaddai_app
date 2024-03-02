interface RecipesArr {
  _id: string | number;
  recipeName: string;
  unidades: number;
  inStock: number;
}

interface RecipeField {
  label: string;
  count: string;
  unidad: string;
  _id: string;
}

interface RecipesItemProps {
  item: RecipesArr;
  isMobile: boolean;
}

interface HorizontalInputProps {
  index: number;
}

interface NavItemProps {
  dir: string;
  label: string;
  icon: React.ReactNode;
  _id: string;
  active: boolean;
}

interface SidebarArray {
  dir: string;
  label: string;
  icon: React.ReactNode;
  _id: string;
}

export type { RecipesArr, RecipeField, RecipesItemProps, HorizontalInputProps, NavItemProps, SidebarArray };
