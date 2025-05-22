type formMode = "add" | "edit" | "view";

type FormType = {
  className: string;
  onClose: () => void;
  mode: formMode;
};

import { IoMdClose } from "react-icons/io";
import TextField from "../TextField";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import { useProductStore } from "../../store/productStore";
import Ingredient from "../Ingredient";



export default function FormNewProduct(props: FormType) {
  const { className, onClose, mode } = props;

  const {
    
    setName,
    setPrice,
    setMode,
    resetForm,
    setWeight,
    setCalories,
    setIsVegan,
    newProduct,
  } = useProductStore();

  // const isReadOnly = mode === "view";
  const isEdit = mode === "edit";

 

  const handelClose = (e: React.MouseEvent<HTMLElement>) => {
    onClose();
  };

 
 


  return (
    <div
      className={`absolute w-[35%] h-screen right-0 top-0 bottom-0 z-10 bg-white p-5 ${className}`}
    >
      <div className="flex items-center justify-between ">
        <p>
          {mode === "add"
            ? "Add New Product"
            : mode === "edit"
            ? "edit"
            : "product details"}
        </p>
        <span onClick={handelClose}>
          <IoMdClose color="gray" size={25} />
        </span>
      </div>

      <form className=" flex flex-col gap-4">
        <TextField
          value={newProduct.name}
          className="flex flex-col"
          label="Name of the product"
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="name"
          key="name"
        />

        <Ingredient mode={mode}/>

        <TextField
        checked={newProduct.isVegan}
          type="checkbox"
          label="Suitable for vegans"
          className="flex justify-center items-center"
          onChange={(e)=>setIsVegan(e.target.checked)}
        />
        <div className="flex">
          <TextField
            value={newProduct.weight}
            type="text"
            label="Weight in grams"
            onChange={(e) => setWeight(e.target.value)}
          />
          <TextField
            type="number"
            label="Calories"
            value={newProduct.calories}
            onChange={(e) => setCalories(Number(e.target.value))}
          />
        </div>

        <TextField
          type="number"
          label="Price of the product"
          value={newProduct.price}
          onChange={(e)=>setPrice(Number(e.target.value))}
          className="flex flex-col"
        />
        <div>
          <p>Upload photo</p>
          <Button />
          <p>upload loading</p>
        </div>
      <Button
  className="w-full bg-gray-800 text-white p-5 rounded-2xl flex items-center justify-center gap-2"
  label={isEdit ? "Update product" : "Add product to the menu"}
  onClick={(e) => {
    e.preventDefault();
    console.log(newProduct);
    resetForm();
    onClose();
  }}
>
  <FaPlus color="white" />
  <PiHamburgerFill color="white" />
</Button>
      </form>
    </div>
  );
}
