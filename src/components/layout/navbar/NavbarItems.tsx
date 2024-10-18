import React from "react";
import { FaMoon, FaRegBell } from "react-icons/fa";
import NavbarCardProfile from "./NavbarCardProfile";
import UserToolbar from "./UserToolbar";

function NavbarItems() {
  return (
    <div>
      <ul className="flex text-lg items-center gap-6 relative">
        <li><FaMoon /></li>
        <li><FaRegBell /></li>
        <li><UserToolbar/></li>
      </ul>
    </div>
  );
}

export default NavbarItems;
