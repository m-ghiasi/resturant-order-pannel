import { useEffect, useState } from "react";
import Card from "../../components/Card";
import TabFilter from "../../components/TabFilter";
import Wrapper from "../../components/Wrapper";
import { foodItems } from "../../data/foodItems";
import Addproduct from "../../components/AddProduct";
import FormNewProduct from "../../components/FormNewProduct";
import { useProductStore } from "../../store/productStore";
type foodItems={
 id: number;
  name: string;
  ingredients: string[];
  weight: string;
  price: number;
  image: string;
  category: string;
  calories: number;
  isVegan: boolean;
}
export default function Products() {
  const [activeTab, setActiveTab] = useState("food");
  const [show, setShow] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit" | "view">("view");

  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const setProductData = useProductStore((state) => state.setProductData);

  useEffect(() => {
    if (products.length === 0) {
      setProducts(foodItems);
    }
  }, []);

  const handleFormToggle = () => setShow(!show);

  const handleTabClick = (category: string) => setActiveTab(category);

  return (
    <div className={`flex flex-col gap-3 items-center w-full h-screen relative overflow-hidden ${show ? "bg-gray-300": "bg-white"}`}>
      <div>Search bar placeholder</div>
      <TabFilter className="" categoryMode={handleTabClick} />
      <Wrapper>
        {products
          .filter((item) => item.category === activeTab)
          .map((item) => (
            <Card
              key={item.id}
              {...item}
              onView={() => {
                setFormMode("view");
                setProductData(item);
                setShow(true);
              }}
              onEdit={() => {
                setFormMode("edit");
                setProductData(item);
                setShow(true);
              }}
            />
          ))}
        <Addproduct onClick={handleFormToggle} />
      </Wrapper>

      {show && (
        <div
          onClick={handleFormToggle}
          className="absolute bg-black opacity-50 z-10 transition-opacity duration-300 top-0 bottom-0 left-0 right-0"
        ></div>
      )}

      
        <FormNewProduct
          onClose={handleFormToggle}
          mode={formMode}
          className={`transition-all duration-300 ${
            show ? "transform translate-x-[0]" : "transform translate-x-full"
          } `}
        />
      
    </div>
  );
}
