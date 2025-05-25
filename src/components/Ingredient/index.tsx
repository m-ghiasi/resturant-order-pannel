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

  const { addIngredient, removeIngredient, newProduct } = useProductStore();

  const isReadOnly = mode === "view";

  return (
    <div>
      <div className="flex  gap-2">
        <TextField
          wrapperClassName="flex flex-col"
          type="text"
          label="Ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <Button
          className="flex items-center text-gray-400"
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
      <div className="flex flex-wrap border border-gray-300  gap-2 w-[80%] ml-2 p-1">
        {newProduct.ingredients.map((item, index) => (
          <button className="flex text-gray-600 items-center px-2 bg-gray-200 h-12 gap-1 text-xl m-1">
            <IoMdClose size={18} />
            {item}
          </button>

          // <li key={index} className="flex bg-gray-400 flex- w-25 gap-">
          //   <span>{item}</span>
          //   {!isReadOnly && (
          //     <button className=""
          //       onClick={(e) => {
          //         e.preventDefault();
          //         removeIngredient(index);
          //       }}
          //     >
          //       <IoMdClose size={18} />
          //     </button>
          //   )}
          // </li>
        ))}
      </div>
    </div>
  );
}
