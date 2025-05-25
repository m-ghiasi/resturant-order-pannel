// import { IoMdClose } from "react-icons/io";
import { useProductStore } from "../../store/productStore";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import TextField from "../TextField";
import Ingredient from "../Ingredient";
import { IoMdClose } from "react-icons/io";
import vegan from "../../assets/vegan.png"
type FormType = {
  mode: any;
  onClose: any;
  className: string;
};
export default function FormNewProduct({ mode, onClose, className }: FormType) {
  const {
    newProduct,
    setName,
    setPrice,
    setWeight,
    setCalories,
    setIsVegan,
    setProductData,
    addProduct,
    updateProduct,
    resetForm,
  } = useProductStore();

  const isEdit = mode === "edit";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "add") {
      // برای افزودن، باید به newProduct یه id یکتا بدی، اینجا ساده با طول آرایه می‌ذاریم
      addProduct({ ...newProduct, id: Date.now() });
    } else if (mode === "edit") {
      updateProduct(newProduct);
    }

    resetForm();
    onClose();
  };

  return (
    <div
      className={`absolute w-[35%] h-screen right-0 top-0 bottom-0 z-10 bg-white p-5 ${className} `}
    >
      <div className="flex items-center justify-between ">
        <p className="text-2xl">
          {mode === "add"
            ? "Add New Product"
            : mode === "edit"
            ? "Edit"
            : "Product details"}
        </p>
        <span onClick={onClose}>
          <IoMdClose color="gray" size={25} />
        </span>
      </div>

      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <TextField
          value={newProduct.name}
          wrapperClassName="flex flex-col"
          label="Name of the product"
          type="text"
          onChange={(e) => setName(e.target.value)}
          id="name"
          key="name"
          inputClassName="w-[80%] rounded-xl"
        />

        <Ingredient mode={mode} />

        <TextField
          inputClassName="order-1 w-10 h-10"
          labelClassName=""
          checked={newProduct.isVegan}
          type="checkbox"
          label="Suitable for vegans"
          wrapperClassName="flex items-center  "
          onChange={(e) => setIsVegan(e.target.checked)}
        >
          <img className="w-12 h-12" src={vegan} alt="" />
          
        </TextField>
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
          onChange={(e) => setPrice(Number(e.target.value))}
          wrapperClassName="flex flex-col"
        />
        <div>
          <p>Upload photo</p>
          <Button />
          <p>upload loading</p>
        </div>
        <Button
          disabled={mode === "view"}
          className="w-full bg-gray-800 text-white p-5 rounded-2xl flex items-center justify-center gap-2"
          label={isEdit ? "Update product" : "Add product to the menu"}
          type="submit"
        >
          <FaPlus color="white" />
          <PiHamburgerFill color="white" />
        </Button>
      </form>
    </div>
  );
}
