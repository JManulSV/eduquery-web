import React from "react";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";
import { FaRegPlusSquare } from "react-icons/fa";
import { useModal } from "@/context/ClassroomCreateModalProvider";

interface dataItems {
  data: SidebarItemProps[];
  expanded: boolean;
  actualpath: string;
}

export default function SideBarItemGrid({
  data,
  expanded,
  actualpath,
}: dataItems) {
  const {openModal} = useModal();
  return (
    <div className={`flex flex-col ${expanded ? "gap-6" : "gap-8"} `}>
      <div className="flex gap-3 items-center text-gray-700">
        <FaRegPlusSquare className="text-lg"/>
        <button onClick={openModal}>Nuevo Salon</button>
      </div>
      {data.map((item) => (
        <SidebarItem
          key={item.title}
          title={item.title}
          logo={item.logo}
          href={item.href}
          expanded={expanded}
          actualPath={actualpath}
        />
      ))}
    </div>
  );
}
