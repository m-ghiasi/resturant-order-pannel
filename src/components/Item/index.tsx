import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type PropType = {
  icon: ReactNode;
  label: string;
  to: string;
  className ?: string;
};

export default function Item(linkItem: PropType) {
  const { icon, label, to, className } = linkItem;
  return (
    <NavLink to={to} className={className}>
      <span className="">{icon}</span>
      <span className="">{label}</span>
    </NavLink>
  );
}
