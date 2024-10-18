import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function NoClassroomMessage() {
  return (
    <div className="flex justify-center">
      <div className="w-[400px] bg-white p-7 rounded-lg shadow-md">
        <h2 className="text-lg mb-5">No tienes ninguna clase creada!</h2>
        <p className="text-gray-700 mb-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ipsum repellendus, magnam, tenetur optio harum, possimus eveniet
          temporibus sapiente laboriosam quidem nam dolorum voluptate minus.
          Saepe quos earum ab animi.
        </p>
        <Link href={'/dashboard/classrooms/create'} className=" flex py-2 bg-main text-white justify-center items-center gap-2 rounded-md cursor-pointer hover:bg-black ">
          <FaPlus />
          <span>Crear un nuevo salon</span>
        </Link>
      </div>
    </div>
  );
}
