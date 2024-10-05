import { ClassroomCreate } from "@/types/create";
import Avvvatars from "avvvatars-react";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface props {
  data: ClassroomCreate;
  prevStep: Function;
}

function Summary({ data, prevStep }: props) {
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  useEffect(() => {
    if (session?.user?.name && session?.user?.email) {
      setUserName(session.user.name);
      setUserEmail(session.user.email);
    }
  }, [session]);
  return (
    <div>
      <h2 className="text-2xl mb-8 mt-4">Resumen:</h2>
      <div className="border-2 p-3 rounded-md mb-8">
        <section className="flex gap-4 items-center border-b-2 p-3">
          <Avvvatars value={userName} size={44} />
          <div className="text-sm">
            <p>{userName}</p>
            <p className="text-gray-700">{userEmail}</p>
          </div>
        </section>
        <section className="p-4 flex flex-col gap-4">
          <div>
            <span className="font-bold">Nombre del salon:</span>
            <p>{data.title}</p>
          </div>
          <div>
            <span className="font-bold">Descripcion del salon:</span>
            <p>{data.description}</p>
          </div>
          <div>
            <span className="font-bold">Id de sheet:</span>
            <p>{data.id_sheet}</p>
          </div>
        </section>
      </div>
      <div className="flex justify-between p-4">
        <input
          type="button"
          className="border border-main rounded-md p-2 hover:font-bold cursor-pointer"
          value={"Atras"}
          onClick={() => prevStep()}
        />
        <input
          type="submit"
          className="bg-main p-2 text-white rounded-md hover:bg-black cursor-pointer"
          value={"Crear Salon"}
        />
      </div>
    </div>
  );
}

export default Summary;
