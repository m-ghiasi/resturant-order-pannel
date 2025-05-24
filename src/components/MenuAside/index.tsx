import { RxDashboard } from "react-icons/rx";
import { IoBasketSharp } from "react-icons/io5";
import { PiHamburgerFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { MdPerson4 } from "react-icons/md";
import { useState, type ReactNode } from "react";
import { PiAvocadoFill } from "react-icons/pi";

import Item from "../Item";
import Button from "../Button";
import StuffInfo from "../StuffInfo";

type menuItemsType = {
  label: string;
  to: string;
  icon: ReactNode;
};

const orderCount = 12;
const menueItems: menuItemsType[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: <RxDashboard className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Orders",
    to: "/orders",
    icon: <IoBasketSharp className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Products",
    to: "/products",
    icon: <PiHamburgerFill className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Resturants",
    to: "/resturants",
    icon: <IoLocationSharp className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Drivers",
    to: "/drivers",
    icon: <MdPerson4 className=" min-w-[30px] min-h-[30px]" />,
  },
];

export default function Menu() {
  const [activeItem, setActiveItem] = useState<string>("dashboard");
  return (
    <div className="h-screen w-60 flex flex-col gap-7 pt-10 relative">
      <Item
        className={" text-2xl  mb-10"}
        label={"avoburger"}
        to={"dashboard"}
        icon={
          <PiAvocadoFill
            className="min-w-[40px] min-h-[40px]"
            color="#39d7ad"
          />
        }
      />

      <div className="w-60">
        {menueItems.map((item, index) => (
          <div
            className={`flex gap-2 p-2 w-full ${
              activeItem === item.label ? "bg-[#ddeee2]" : ""
            }`}
            key={index}
            onClick={()=>setActiveItem(item.label)}
          >
            <Item
             onClick={() => setActiveItem(item.label)}
              key={index}
              to={item.to}
              icon={item.icon}
              label={item.label}
            />
            {item.label === "Orders" && orderCount > 0 && (
              <span className=" bg-gradient-to-r from-[#39d7ad] to-[#75db75] text-white text-xs rounded-2xl w-8 h-5 flex items-center justify-center mt-2">
                {orderCount}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 items-center flex flex-col ">
        <p className="text-gray-700 mb-3">done for the day?</p>

        <Button
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#39d7ad] to-[#75db75] mb-3 p-2 rounded-2xl text-white"
          label="Send daily Report"
        >
          <IoSend />
        </Button>

        <StuffInfo />
      </div>
    </div>
  );
}
