type PropType = {
  
  className?: string;
  onClick?: (value:string) => void;
  
};
import { FaHamburger } from "react-icons/fa";
import { RiDrinksFill } from "react-icons/ri";
import { TbSoupFilled } from "react-icons/tb";
import { IoFastFood } from "react-icons/io5";
import Button from "../Button";


type FilterType= {
  label:string;
  icon: React.ReactNode;
  value:string
}
const filterItem: FilterType[] = [
  {
    label: "Main Curses",
    value:"food",

    icon: <FaHamburger className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Side Dishes",
    value:"starter",


    icon: <TbSoupFilled className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Drink",
    value:"drink",

    icon: <RiDrinksFill className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Other",
    value:"other",

    icon: <IoFastFood className="min-w-[30px] min-h-[30px]" />,
  },
];

export default function TabFilter(props: PropType) {
  const {  className, onClick } = props;


  return <div className={`${className} flex justify-evenly w-[80%] bg-white rounded-2xl p-5`}>

    {filterItem.map((item, index)=>(
      <Button className="flex items-center gap-2" key={index} onClick={()=>onClick?.(item.value)}>
        <span className="">{item.icon}</span>
        <span className="font-medium text-[14px]">{item.label}</span>
      </Button>
    ))}
  </div>;
}
