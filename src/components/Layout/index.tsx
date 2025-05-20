import { Outlet } from "react-router-dom";
import Menu from "../MenuAside";

export default function Layout() {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
