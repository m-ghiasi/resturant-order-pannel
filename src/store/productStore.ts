// store/productStore.ts
import { create } from 'zustand';

export type Product = {
  id: number;
  name: string;
  ingredients: string[];
  weight: string;
  price: number;
  image: string;
  category: "food" | "starter" | "drink" | "other";
  calories: number;
  isVegan: boolean;
};

type ProductStore = {
  products: Product[];
  selectedProduct: Product | null;
  newProduct: Omit<Product, 'id'>;

  fetchProducts: () => Promise<void>;
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  setSelectedProduct: (product: Product | null) => void;
  setNewProduct: (product: Omit<Product, 'id'>) => void;
  loadProductToForm: (product: Omit<Product, 'id'>) => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  selectedProduct: null,
  newProduct: {
    name: "",
    ingredients: [],
    weight: "",
    price: 0,
    image: "",
    category: "food",
    calories: 0,
    isVegan: false,
  },

  fetchProducts: async () => {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    set({ products: data });
  },

  addProduct: async (newProduct) => {
    await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    await get().fetchProducts();
  },

  updateProduct: async (updatedProduct) => {
    await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });
    await get().fetchProducts();
  },

  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setNewProduct: (product) => set({ newProduct: product }),
  loadProductToForm: (product) => set({ newProduct: product }),
}));
