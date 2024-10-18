import React from "react";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

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
  return (
    <div className={`flex flex-col ${expanded ? "gap-6" : "gap-8"} `}>
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
