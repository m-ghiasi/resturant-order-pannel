import { create } from "zustand";

export type Product = {
  id: number;
  name: string;
  price: number;
  weight: string;
  calories: number;
  isVegan: boolean;
  image: string;
  category: string;
  ingredients: string[];
};

type ProductState = {
  products: Product[];
  newProduct: Product;
  setProductData: (data: Product) => void;
  setName: (name: string) => void;
  setPrice: (price: number) => void;
  setWeight: (weight: string) => void;
  setCalories: (cal: number) => void;
  setIsVegan: (value: boolean) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  resetForm: () => void;
  addIngredient: (ingredient: string) => void;
  removeIngredient: (index: number) => void;
  setProducts: (products: Product[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchName: string;
setSearchName: (text: string) => void;
};

const initialProduct: Product = {
  id: 0,
  name: "",
  price: 0,
  weight: "",
  calories: 0,
  isVegan: false,
  image: "",
  category: "food",
  ingredients: [],
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  newProduct: { ...initialProduct },

  setProducts: (products) => set(() => ({ products })),

  setProductData: (data) => set(() => ({ newProduct: data })),

  setName: (name) =>
    set((state) => ({
      newProduct: { ...state.newProduct, name },
    })),

  setPrice: (price) =>
    set((state) => ({
      newProduct: { ...state.newProduct, price },
    })),

  setWeight: (weight) =>
    set((state) => ({
      newProduct: { ...state.newProduct, weight },
    })),

  setCalories: (calories) =>
    set((state) => ({
      newProduct: { ...state.newProduct, calories },
    })),

  setIsVegan: (isVegan) =>
    set((state) => ({
      newProduct: { ...state.newProduct, isVegan },
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
        ingredients: state.newProduct.ingredients.filter((_, i) => i !== index),
      },
    })),

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updated.id ? updated : p
      ),
    })),
    activeTab: "food",
  setActiveTab: (tab) => set(() => ({ activeTab: tab })),
  searchName: "",
setSearchName: (text) => set(() => ({ searchName: text })),

  resetForm: () => set(() => ({ newProduct: { ...initialProduct } })),
}));
