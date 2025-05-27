import { useEffect, useMemo, useState } from "react";
import { useProductStore } from "../../store/productStore";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import TabFilter from "../../components/TabFilter";
import Addproduct from "../../components/AddProduct";
import FormNewProduct from "../../components/FormNewProduct";
import Search from "../../components/SearchBar";
export type Category = "food" | "starter" | "drink" | "other";
export default function Products() {
  const [show, setShow] = useState(false);
  const [formMode, setFormMode] = useState<"add" | "edit" | "view">("add");
  const [activeTab, setActiveTab] = useState<"food" | "starter" | "drink" | "other">("food");

  const [searchName, setSearchName] = useState("");

  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
    console.log("products: ", products);
  }, []);

  const filteredItems = useMemo(() => {
    return products.filter((item) => {
      const matchCategory = item.category === activeTab;
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, activeTab, searchName]);
  console.log("filteredItems:", filteredItems);

  const handleFormToggle = () => setShow(!show);
  const handleTabClick = (category: Category) => setActiveTab(category);

  return (
    <div
      className={`flex flex-col gap-3 px-20 w-full h-screen relative overflow-hidden ${
        show ? "bg-gray-300" : "bg-gray-100"
      }`}
    >
      <Search 
       searchName={searchName}
  setSearchName={setSearchName}
      />
      <TabFilter categoryMode={handleTabClick} />

      <Wrapper>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            
            <Card
              key={item.id}
              {...item}
              onView={() => {
                setFormMode("view");
                setShow(true);
                useProductStore.getState().loadProductToForm(item);
              }}
              onEdit={() => {
                setFormMode("edit");
                useProductStore.getState().loadProductToForm(item);
                setShow(true);
              }}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">موردی پیدا نشد</p>
        )}
        <Addproduct onClick={handleFormToggle} />
      </Wrapper>

      {show && (
        <div
          onClick={handleFormToggle}
          className="absolute bg-black opacity-50 z-10 transition-opacity duration-300 top-0 bottom-0 left-0 right-0"
        />
      )}

      <FormNewProduct
        mode={formMode}
        defaultCategory={activeTab}
        onClose={handleFormToggle}
        className={`transition-all duration-300 ${
          show ? "transform translate-x-[0]" : "transform translate-x-full"
        } `}
      />
    </div>
  );
}
