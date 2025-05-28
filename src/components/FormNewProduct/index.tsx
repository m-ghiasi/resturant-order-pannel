import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import { PiHamburgerFill } from "react-icons/pi";
import TextField from "../TextField";
import Ingredient from "../Ingredient";
import { IoMdClose } from "react-icons/io";
import vegan from "../../assets/vegan.png";
import { MdFileUpload } from "react-icons/md";
import { useState, useEffect } from "react";
import { useProductStore } from "../../store/productStore";
import defaultImage from "../../assets/food.webp";

export type Category = "food" | "starter" | "drink" | "other";

type FormType = {
  mode: "add" | "edit" | "view";
  onClose: () => void;
  className: string;
  defaultCategory: Category;
};

export default function FormNewProduct({
  mode,
  onClose,
  className,
  defaultCategory,
}: FormType) {
  const isEdit = mode === "edit";

  const { newProduct, addProduct, updateProduct } = useProductStore();

  // وقتی newProduct تغییر کرد، state های فرم رو به‌روزرسانی کن
  const [name, setName] = useState(newProduct.name);
  const [weight, setWeight] = useState(newProduct.weight);
  const [price, setPrice] = useState(newProduct.price);
  const [category, setCategory] = useState<Category>(newProduct.category || defaultCategory);
  const [calories, setCalories] = useState(newProduct.calories);
  const [isVegan, setIsVegan] = useState(newProduct.isVegan);
  const [ingredients, setIngredients] = useState<string[]>(newProduct.ingredients);
  const [image, setImage] = useState(newProduct.image || defaultImage);

  useEffect(() => {
    setName(newProduct.name);
    setWeight(newProduct.weight);
    setPrice(newProduct.price);
    setCategory(mode === "edit" ? newProduct.category : defaultCategory); 
    setCalories(newProduct.calories);
    setIsVegan(newProduct.isVegan);
    setIngredients(newProduct.ingredients);
    setImage(newProduct.image || defaultImage);
  }, [newProduct, defaultCategory, mode]);

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !weight) {
      alert("لطفا تمام فیلدهای ضروری را پر کنید");
      return;
    }

    const productToSave = {
      id: (newProduct as any).id, // اگر ادیت هست id رو بذار، برای اضافه کردن میتونی حذفش کنی
      name,
      weight,
      price,
      image,
      category,
      calories,
      isVegan,
      ingredients,
    };

    try {
      if (mode === "add") {
        await addProduct(productToSave);
        alert("محصول با موفقیت اضافه شد");
      } else if (mode === "edit") {
        await updateProduct(productToSave);
        alert("محصول با موفقیت ویرایش شد");
      }
      onClose();
    } catch (err) {
      alert("خطا در ذخیره محصول");
      console.error(err);
    }
  };

  return (
    <div
      className={`absolute w-[35%] h-screen right-0 top-0 bottom-0 z-10 bg-white p-5 overflow-auto ${className} `}
    >
      <div className="flex items-center justify-between ">
        <p className="text-2xl">
          {mode === "add"
            ? "Add New Product"
            : mode === "edit"
            ? "Edit"
            : "Product details"}
        </p>
        <span onClick={onClose} className="cursor-pointer">
          <IoMdClose color="gray" size={25} />
        </span>
      </div>

      <form onSubmit={handelSubmit} className="flex flex-col gap-2">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name of the product"
          type="text"
          id="name"
          readOnly={mode === "view"}
          wrapperClassName="flex flex-col"
        />

        <Ingredient
          mode={mode}
                   
        />

        <TextField
          inputClassName="w-8 h-8"
          labelClassName=""
          checked={isVegan}
          type="checkbox"
          label="Suitable for vegans"
          wrapperClassName="flex flex-row-reverse items-center justify-end"
          onChange={(e) => setIsVegan(e.target.checked)}
          readOnly={mode === "view"}
        >
          <img className="w-12 h-12" src={vegan} alt="" />
        </TextField>

        <div className="flex ">
          <TextField
            value={weight}
            type="text"
            label="Weight in grams"
            onChange={(e) => setWeight(e.target.value)}
            readOnly={mode === "view"}
          />

          <TextField
            type="number"
            label="Calories"
            value={calories}
            onChange={(e) => setCalories(Number(e.target.value))}
            readOnly={mode === "view"}
          />
        </div>

        <TextField
          type="number"
          label="Price of the product"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          readOnly={mode === "view"}
          wrapperClassName="flex flex-col"
        />

        <div className="flex justify-evenly my-2 h-20 items-center text-xl font-medium ">
          <p>Upload photo</p>
          <Button className="flex items-center gap-3" label="Choose file">
            <MdFileUpload size={23} />
          </Button>
        </div>

        {mode !== "view" && (
          <Button
            className="w-full bg-gray-800 text-white p-5 rounded-2xl flex items-center justify-center gap-2 text-xl"
            label={isEdit ? "Update product" : "Add product to the menu"}
            type="submit"
          >
            <FaPlus size={23} color="white" />
            <PiHamburgerFill size={23} color="white" />
          </Button>
        )}
      </form>
    </div>
  );
}
