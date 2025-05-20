import { useState } from "react";
import Card from "../../components/Card";
import TabFilter from "../../components/TabFilter";
import Wrapper from "../../components/Wrapper";
import { foodItems } from "../../data/foodItems";
import Addproduct from "../../components/AddProduct";
import FormNewProduct from "../../components/FormNewProduct";

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("food");
  const [show, setShow]=useState(false)

  const filtered = foodItems.filter((item) => item.category === activeTab);

  const handelForm= (e: React.MouseEvent<HTMLElement>)=>{
        setShow(!show)
  }

   

  const handelClick = (category: string) => {
    setActiveTab(category);
  };
  return (
    <div className="flex  flex-col gap-3 items-center  bg-gray-300 w-full h-screen  relative overflow-x-hidden">
      <div>handel search bar </div>
      <TabFilter className="" onClick={handelClick} />
      <Wrapper>
        {filtered.map((item) => (
          <Card key={item.id} {...item} />
        ))}
        <Addproduct onClick={handelForm}/>

      </Wrapper>

      <FormNewProduct onClose={()=>setShow(false)} className={` ${show? "transform translate-x-0]": "transform translate-x-[100%]"} transition-all duration-300 `} />
      
    </div>
  );
}
