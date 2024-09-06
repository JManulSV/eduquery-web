"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="w-full bg-red-300 flex justify-between items-baseline p-4">
      <section>
        <h1 className="text-xl font-bold">EduQuery</h1>
      </section>
      <section>
        <ul className="flex gap-6">
          <li>
            {" "}
            <Link href={"/home"}>Inicio</Link>
          </li>
          <li>
            {" "}
            <Link href={"/home"}>Acerca de</Link>
          </li>
          <li>
            {" "}
            <Link href={"/home"}>Contacto</Link>
          </li>
        </ul>
      </section>
      <section className="flex gap-4">
        {session?.user ? (
          <>
            <Link
              href={"#"}
              className="flex p-2 bg-main text-white rounded-lg gap-2 justify-center items-center"
            >
              <p>{session.user.name}</p>
              <FaUser />
            </Link>
            <Link
              onClick={() => signOut()}
              href={"/login"}
              className="p-2 bg-red-700 text-white rounded-lg"
            >
              Cerrar Sesion
            </Link>
          </>
        ) : (
          <>
            <Link href={"/login"} className="p-2 bg-main text-white rounded-lg">
              Iniciar Sesion
            </Link>
            <Link
              href={"/register"}
              className="p-2 bg-white text-black rounded-lg"
            >
              Registrarse
            </Link>
          </>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
