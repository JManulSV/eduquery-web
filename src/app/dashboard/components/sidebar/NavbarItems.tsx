import React from "react";
import { FaMoon, FaRegBell } from "react-icons/fa";
import NavbarCardProfile from "./NavbarCardProfile";

function NavbarItems() {
  return (
    <div>
      <ul className="flex text-lg items-center gap-6">
        <li><FaMoon /></li>
        <li><FaRegBell /></li>
        <li><NavbarCardProfile/></li>
      </ul>
    </div>
  );
}

export default NavbarItems;
