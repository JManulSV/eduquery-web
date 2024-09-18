"use client";
import { FaAngleDown } from "react-icons/fa";
import NavbarCardProfile from "./NavbarCardProfile";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { HiArrowRightOnRectangle, HiOutlineCog6Tooth, HiOutlineUser } from "react-icons/hi2";

function UserToolbar() {
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (session?.user?.name && session?.user?.email) {
      setUserName(session.user.name);
      setUserEmail(session.user.email);
    }
  }, [session]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center gap-1 ">
      <NavbarCardProfile username={userName} />
      <div
        className="text-sm cursor-pointer"
        onClick={() => setOpenModal(!openModal)}
      >
        <FaAngleDown />
      </div>
      {openModal && <ModalCardProfile username={userName} email={userEmail} />}
    </div>
  );
}

interface ModalProps {
  username: string;
  email: string;
}

function ModalCardProfile({ username, email }: ModalProps) {
  return (
    <div className="w-[200px] bg-white rounded-md border absolute top-10 right-0 shadow-sm  p-3">
      <div className="flex items-center gap-3 border-b pb-3">
        <NavbarCardProfile username={username} size={38} />
        <div className="flex flex-col">
          <span className="text-[13px] -mb-3 font-bold">{username}</span>
          <span className="text-[11px] text-gray-600">{email}</span>
        </div>
      </div>
      <div className="border-b py-3 text-gray-700">
        <ul>
          <li className="flex items-center gap-2 text-[14px] hover:text-blue-700 cursor-pointer">
            <HiOutlineUser  className="text-xl" />
            <p className="font-normal">Mi perfil</p>
          </li> 
          <li className="flex items-center gap-2 text-[14px] hover:text-blue-700 cursor-pointer ">
            <HiOutlineCog6Tooth className="text-xl" />
            Configuracion
          </li>
        </ul>
      </div>
      <div className="flex pt-3 text-gray-700 items-center gap-2 text-[14px] hover:text-red-700 cursor-pointer " onClick={() => signOut()}>
        <HiArrowRightOnRectangle  className="text-xl"/>
        <p>Cerrar Sesion</p>
      </div>
    </div>
  );
}

export default UserToolbar;
