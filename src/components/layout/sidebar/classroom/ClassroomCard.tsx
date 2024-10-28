import { ClassroomCreate } from "@/types/create";
import Avvvatars from "avvvatars-react";
import Link from "next/link";
import React from "react";

interface Props {
  classroom: ClassroomCreate,
  expanded: boolean,
}

export default function ClassroomCard({ classroom, expanded}: Props) {
  return (
    <Link
      href={`/dashboard/classroom/${classroom.id}`}
      className={`w-full border border-white hover:border-gray-100 hover:bg-gray-100 py-3 cursor-pointer flex ${expanded?'justify-start':'justify-center'} items-center gap-3`}
    >
      <Avvvatars value={classroom.name} style="shape" size={32} />
      <span className={`${expanded? 'block':'hidden'}`}>{classroom.name}</span>
    </Link>
  );
}
