import { create } from 'zustand';


type Mode = 'add' | 'edit' | 'view';
// تعریف ساده نوع محصول
type Product = {
  name: string;
  ingredients: string[];
  weight: string;
  price: number;
//   image: string;
  calories:number;
  isVegan:boolean;
};

 

// تعریف حالت استور
type ProductState = {
     mode: Mode; 
  setMode: (mode: Mode) => void;
  newProduct: Product;
  setProductData: (product: Product) => void;
  setName: (name: string) => void;
  setWeight: (weight: string) => void;
  setPrice: (price: number) => void;
  setCalories: (calories: number) => void;
//   setImage: (image: string) => void;
  addIngredient: (ingredient: string) => void;
  removeIngredient: (index: number) => void;
  resetForm: () => void;
  setIsVegan:(isVegan: boolean)=>void

};



// مقدار اولیه‌ی محصول
const initialProduct: Product = {
  name: '',
  ingredients: [],
  weight: '',
  price: 0,
//   image: '',
  calories:0,

  isVegan:false,
};

// ساختن استور
export const useProductStore = create<ProductState>((set) => ({

    mode: 'add',
     setMode: (mode) => set({ mode }),

  newProduct: initialProduct,

  setIsVegan: (isVegan) =>
    set((state) => ({
      newProduct: { ...state.newProduct, isVegan },
    })),

  setName: (name) =>
    set((state) => ({
      newProduct: { ...state.newProduct, name },
    })),

  setWeight: (weight) =>
    set((state) => ({
      newProduct: { ...state.newProduct, weight },
    })),
  setCalories: (calories) =>
    set((state) => ({
      newProduct: { ...state.newProduct, calories },
    })),

  setPrice: (price) =>
    set((state) => ({
      newProduct: { ...state.newProduct, price },
    })),
    

//   setImage: (image) =>
//     set((state) => ({
//       newProduct: { ...state.newProduct, image },
//     })),

  addIngredient: (ingredient) =>
    set((state) => ({
      newProduct: {
        ...state.newProduct,
        ingredients: [...state.newProduct.ingredients, ingredient],
      },
    })),

  removeIngredient: (index) =>
    set((state) => {
      const updatedIngredients = [...state.newProduct.ingredients];
      updatedIngredients.splice(index, 1);
      return {
        newProduct: { ...state.newProduct, ingredients: updatedIngredients },
      };
    }),

    setProductData: (data: Product) => {
  set({ newProduct: data });
},

  resetForm: () => set({ newProduct: initialProduct }),
}));