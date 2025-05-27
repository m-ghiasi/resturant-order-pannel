// components/Ingredient.tsx
import TextField from "../TextField";
import { useProductStore } from "../../store/productStore";
import { useState } from "react";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

type IngredientProps = {
  mode: "add" | "edit" | "view";
};

export default function Ingredient({ mode }: IngredientProps) {
  const [ingredient, setIngredient] = useState("");
  const { newProduct, setNewProduct } = useProductStore();

  const isReadOnly = mode === "view";

  return (
    <div>
      <div className="flex gap-2">
        <TextField
          wrapperClassName="flex flex-col"
          type="text"
          label="Ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        {!isReadOnly && (
          <Button
            className="flex items-center text-gray-400"
            onClick={(e) => {
              e.preventDefault();
              if (ingredient.trim()) {
                setNewProduct({
                  ...newProduct,
                  ingredients: [...newProduct.ingredients, ingredient.trim()],
                });
                setIngredient("");
              }
            }}
          >
            <FaPlus />
          </Button>
        )}
      </div>

      <div className="flex flex-wrap border border-gray-300 gap-2 w-[80%] ml-2 p-1 min-h-10">
        {newProduct.ingredients.map((item, index) => (
          <div
            key={index}
            className="flex text-gray-600 items-center px-2 bg-gray-200 h-10 gap-1 m-1 rounded-full"
          >
            <span>{item}</span>
            {!isReadOnly && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const updatedIngredients = newProduct.ingredients.filter(
                    (_, i) => i !== index
                  );
                  setNewProduct({
                    ...newProduct,
                    ingredients: updatedIngredients,
                  });
                }}
              >
                <IoMdClose size={18} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
