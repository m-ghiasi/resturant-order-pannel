import { RxDashboard } from "react-icons/rx";
import { IoBasketSharp } from "react-icons/io5";
import { PiHamburgerFill } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { MdPerson4 } from "react-icons/md";
import type { ReactNode } from "react";
import { IoMdHeartHalf } from "react-icons/io";
import Item from "../Item";
import Button from "../Button";
import StuffInfo from "../StuffInfo";

type menuItemsType = {
  label: string;
  to: string;
  icon: ReactNode;
};
const menueItems: menuItemsType[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: <RxDashboard className="min-w-[30px] min-h-[30px]"  />,
  },
  {
    label: "Orders",
    to: "/orders",
    icon: <IoBasketSharp className="min-w-[30px] min-h-[30px]" />,
  },
  {
    label: "Products",
    to: "/products",
    icon: (
      <PiHamburgerFill className="min-w-[30px] min-h-[30px]"  />
    ),
  },
  {
    label: "Resturants",
    to: "/resturants",
    icon: (
      <IoLocationSharp className="min-w-[30px] min-h-[30px]"/>
    ),
  },
  {
    label: "Drivers",
    to: "/drivers",
    icon: <MdPerson4 className=" min-w-[30px] min-h-[30px]"  />,
  },
];

export default function Menu() {
  return (
    <div className="h-screen w-60 flex flex-col gap-7 pl-6 pt-10 relative">
      <Item
        className={" text-2xl  mb-10"}
        label={"avoburger"}
        to={"dashboard"}
        icon={
          <IoMdHeartHalf className="min-w-[40px] min-h-[40px]" color="black" />
        }
      />
      <div>
        {menueItems.map((item, index) => (
          <Item key={index} to={item.to} icon={item.icon} label={item.label} />
        ))}
      </div>

      <div className="absolute bottom-2 items-center flex flex-col ">
        <p className="text-gray-700 mb-3">done for the day?</p>

        <Button
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-yellow-300 mb-3 p-2 rounded-2xl text-white"
          label="Send daily Report"
        >
          <IoSend />
        </Button>

        <StuffInfo />
      </div>
    </div>
  );
}
