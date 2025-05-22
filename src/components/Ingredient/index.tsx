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

  const {
    addIngredient,
    removeIngredient,

    newProduct,
  } = useProductStore();

  const isReadOnly = mode === "view";
  

  return (
    <div>
      <p>Ingredients</p>
      <div className="flex gap-2">
        <TextField
          type="text"
          label="Add ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (ingredient) {
              addIngredient(ingredient);
              setIngredient("");
            }
          }}
        >
          <FaPlus />
        </Button>
      </div>

      <ul className="list-disc pl-5">
        {newProduct.ingredients.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            {!isReadOnly && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeIngredient(index);
                }}
              >
                <IoMdClose size={18} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
