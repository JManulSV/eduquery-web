import React from "react";
import { FaAngleDown } from "react-icons/fa";

function NavbarCardProfile() {
  return (
    <div className="flex items-center gap-1">
      <div className="rounded-full bg-black text-white py-1 px-2">LG</div>
      <div className="text-sm"><FaAngleDown /></div>
      
    </div>
  );
}

export default NavbarCardProfile;
