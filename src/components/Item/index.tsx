import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type PropType = {
  icon: ReactNode;
  label: string;
  to: string;
  className ?: string;
 onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Item(linkItem: PropType) {
  const { icon, label, to, className } = linkItem;
  return (
    <NavLink className= {`${className} flex gap-3 items-center  pb-4`} to={to}>
      <span className="text-gray-700 ">{icon}</span>
      
      <span className={` font-medium text-gray-700`}> {label}</span>
    </NavLink>
  );
}
