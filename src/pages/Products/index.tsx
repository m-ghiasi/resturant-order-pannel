import { useState } from "react";
import Card from "../../components/Card";
import TabFilter from "../../components/TabFilter";
import Wrapper from "../../components/Wrapper";
import { foodItems } from "../../data/foodItems";
import Addproduct from "../../components/AddProduct";
import FormNewProduct from "../../components/FormNewProduct";
import { useProductStore } from "../../store/productStore";

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("food");
  const [show, setShow] = useState(false);

  const [formMode, setFormMode] = useState<"add" | "edit" | "view">("view");

  const filtered = foodItems.filter((item) => item.category === activeTab);

  const handelForm = () => {
    setShow(!show);
  };

  const handelClick = (category: string) => {
    setActiveTab(category);
  };
  const sampleProduct = {
    name: "Burger",
    price: 120,
    weight: "300g",
    ingredients: ["Cheese", "Bread"],
    calories: 500,
    isVegan: false,
    image: "/burger.jpg",
  };

  const{setProductData}=useProductStore()
  return (
    <div className="flex  flex-col gap-3 items-center  bg-gray-300 w-full h-screen  relative overflow-x-hidden">
      <div>handel search bar </div>
      <TabFilter className="" onClick={handelClick} />
      <Wrapper>
        {filtered.map((item) => (
          <Card
            onView={() => {
              setFormMode("view");
              setProductData(sampleProduct);
              setShow(true);
            }}
            onEdit={() => {
              setFormMode("edit");
              setProductData(sampleProduct);
              setShow(true);
            }}
            key={item.id}
            {...item}
          />
        ))}
        <Addproduct onClick={handelForm} />
      </Wrapper>
      {show && (
        <div
          onClick={handelForm}
          className="absolute bg-black opacity-50 z-10 transition-opacity duration-300 top-0 bottom-0 left-0 right-0"
        ></div>
      )}

      <FormNewProduct
        onClose={() => setShow(false)}
        mode={formMode}
        className={` ${
          show ? "transform translate-x-0]" : "transform translate-x-[100%]"
        } transition-all duration-300 `}
      />
    </div>
  );
}
