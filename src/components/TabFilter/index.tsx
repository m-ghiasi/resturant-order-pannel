import { FaHamburger } from "react-icons/fa";
import { RiDrinksFill } from "react-icons/ri";
import { TbSoupFilled } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { useState } from "react";
import Button from "../Button";


export type Category = "food" | "starter" | "drink" | "other";

type FilterType = {
  label: string;
  icon: React.ReactNode;
  category: Category;
};

type TabFilterProps = {
  categoryMode: (category: Category) => void;
  className?: string; 
};

const filterItem: FilterType[] = [
  {
    label: "Main Courses",
    category: "food",
    icon: <FaHamburger className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Side Dishes",
    category: "starter",
    icon: <TbSoupFilled className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Drink",
    category: "drink",
    icon: <RiDrinksFill className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Other",
    category: "other",
    icon: <IoFastFood className="min-w-[30px] min-h-[30px]" />,
  },
];

export default function TabFilter(props: TabFilterProps) {
  const { className, categoryMode } = props;
  const [isActivTab, setIsActivTab] = useState<Category>("food");

  return (
    <div
      className={`${className} flex justify-between items-center w-full bg-white rounded-2xl p-5 my-4`}
    >
      <div className="flex justify-evenly gap-30">
        {filterItem.map((item, index) => (
          <Button
            className={`w-40 p-3 flex items-center gap-2 ${
              isActivTab === item.category ? "border-b-4 border-gray-600" : ""
            }`}
            key={index}
            onClick={() => {
              categoryMode(item.category);
              setIsActivTab(item.category);
            }}
          >
            <span>{item.icon}</span>
            <span className="font-medium text-[14px]">{item.label}</span>
          </Button>
        ))}
      </div>
      <span>
        <IoMdMore />
      </span>
    </div>
  );
}
