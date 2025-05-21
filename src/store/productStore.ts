import {create} from "zustand"

type Product = {
  id: string;
  name: string;
  price: number;
  weight: string;
  image: string;
  ingredients: string[];
};

type ProductState = {
  newProduct: Omit<Product, "id">;
  setField: (field: keyof Omit<Product, "id">, value: any) => void;
  addIngredient: (ingredient: string) => void;
  removeIngredient: (index: number) => void;
  resetForm: () => void;
};

export const useProductStore = create<ProductState>((set) => ({
  newProduct: {
    name: "",
    price: 0,
    weight: "",
    image: "",
    ingredients: [],
  },
  setField: (field, value) =>
    set((state) => ({
      newProduct: {
        ...state.newProduct,
        [field]: value,
      },
    })),
  addIngredient: (ingredient) =>
    set((state) => ({
      newProduct: {
        ...state.newProduct,
        ingredients: [...state.newProduct.ingredients, ingredient],
      },
    })),
  removeIngredient: (index) =>
    set((state) => ({
      newProduct: {
        ...state.newProduct,
        ingredients: state.newProduct.ingredients.filter(
          (_, i) => i !== index
        ),
      },
    })),
  resetForm: () =>
    set(() => ({
      newProduct: {
        name: "",
        price: 0,
        weight: "",
        image: "",
        ingredients: [],
      },
    })),
}));