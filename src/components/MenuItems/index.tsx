import { RxDashboard } from "react-icons/rx";
import { IoBasketSharp } from "react-icons/io5";
import { PiHamburgerFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { MdPerson4 } from "react-icons/md";
import type { ReactNode } from "react";
import Item from "../Item";

 type menuItemsType= {
    label: string;
    to:string;
    icon:ReactNode
 }
const menueItems: menuItemsType[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: <RxDashboard className="min-w-[40px] min-h-[40px]" color="white" />,
  },
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: <IoBasketSharp className="min-w-[40px] min-h-[40px]" color="black" />,
  },
  {
    label: "Orders",
    to: "/orders",
    icon: (
      <PiHamburgerFill className="min-w-[40px] min-h-[40px]" color="white" />
    ),
  },
  {
    label: "Products",
    to: "/products",
    icon: (
      <IoLocationSharp className="min-w-[40px] min-h-[40px]" color="white" />
    ),
  },
  {
    label: "Drivers",
    to: "/drivers",
    icon: <MdPerson4 className="min-w-[40px] min-h-[40px]" color="white" />,
  },
];

export default function menu(){
    return(
        <div>
          {menueItems.map((item,index)=>(
            <Item key={index} to={item.to} icon={item.icon} label={item.label}/>
          ))}
          
          
            
        </div>
    )
}