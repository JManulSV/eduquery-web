"use client";
import { usePathname } from "next/navigation";
import NavbarItems from "./NavbarItems";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-16 flex items-center justify-between px-12">
      <span className="text-2xl font-semibold">{pathname}</span>
      <NavbarItems /> 
    </nav>
  );
}

export default Navbar;
