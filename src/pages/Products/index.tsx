import { useState } from "react";
import Card from "../../components/Card";
import TabFilter from "../../components/TabFilter";
import Wrapper from "../../components/Wrapper";
import { foodItems } from "../../data/foodItems";

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("food");

  const filtered = foodItems.filter((item) => item.category === activeTab);


  const handelClick = (category: string) => {
    setActiveTab(category);
  };
  return (
    <div className="flex  flex-col gap-3 items-center  bg-gray-300 w-full h-screen ">
      <div>handel search bar </div>
      <TabFilter className="" onClick={handelClick} />
      <Wrapper>
        {filtered.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Wrapper>
    </div>
  );
}
