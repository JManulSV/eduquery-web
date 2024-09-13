"use client";
import { useState } from "react";
import SideBarItemGrid from "./SideBarItemGrid";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaBook,
  FaChildren,
  FaDiagramProject,
  FaGear,
  FaHouse,
  FaSchoolFlag,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  const data = [
    { title: "Inicio", logo: <FaHouse />, href: "/dashboard", expanded },
    { title: "Salones", logo: <FaSchoolFlag />, href: "/classrooms", expanded },
    { title: "Alumnos", logo: <FaChildren />, href: "/students", expanded },
    { title: "Materias", logo: <FaDiagramProject />, href: "/subjects", expanded },
    { title: "Tareas", logo: <FaBook />, href: "/homework", expanded },
  ];

  const data2 = [
    { title: "Configuracion", logo: <FaGear />, href: "/settings", expanded },
  ];

  console.log(pathname);
  return (
    <aside
      className={`flex flex-col justify-between h-screen py-10 px-8 transition-all duration-300 ${
        expanded ? "w-[250px]" : "w-[100px]"
      }`}
    >
      <div className="flex flex-col gap-14">
        <section
          className={`flex justify-between items-center ${
            expanded ? "" : "flex-col-reverse gap-4"
          }`}
        >
          <Link href={"/dashboard"} className="text-2xl font-medium">{`${
            expanded ? "EduQuery" : "EQ"
          }`}</Link>
          <div
            className="p-1 bg-main rounded-full hover:bg-gray-600 cursor-pointer"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded ? "Contraer menú" : "Expandir menú"}
          >
            {expanded ? (
              <FaAnglesLeft className="text-sm text-gray-100" />
            ) : (
              <FaAnglesRight className="text-sm text-gray-100" />
            )}
          </div>
        </section>
        <section>
          <SideBarItemGrid
            data={data}
            expanded={expanded}
            actualpath={pathname}
          />
        </section>
      </div>
      <section>
        <SideBarItemGrid
          data={data2}
          expanded={expanded}
          actualpath={pathname}
        />
      </section>
    </aside>
  );
}