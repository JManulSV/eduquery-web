import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SheetInfoForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="mt-10 flex flex-col h-auto">
      <div>
        <p className="">
          Crea un sheet en tu almacenamiento de drive, ingresa al documento y
          obten el id unico del link. <br />
          Ejemplo:
          <span className="font-bold">
            https://docs.google.com/spreadsheets/d/
            <span className="text-blue-600">spreadsheetID</span>
          </span>
        </p>
      </div>
      <form className="mt-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="id_sheet">Id de sheet</label>
          <input
            type="text"
            id="id_sheet"
            className={`px-2 py-1 border-2 rounded-lg ${
              errors.id_sheet
                ? "border-red-500 text-red-500"
                : "border-gray-300"
            }`}
          />
        </div>
        <div className="mt-10">
          <p>
            Comparte el sheet con todos los permisos, la cuenta del servicio
            para poder tener acceso a los datos:
          </p>
            <CopyEmailComponent email={'example@email.com'} />
        </div>
        <div className="flex justify-between p-4">
          <button className="border border-main rounded-md p-2 hover:font-bold">
            Atras
          </button>
          <input
            type="submit"
            className="bg-main p-2 text-white rounded-md hover:bg-black"
            value={"Siguiente"}
          />
        </div>
      </form>
    </div>
  );
}

async function CopyEmailComponent({email}) {
    const [copied, setCopied] = useState(false);

    try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Restablece el estado después de 2 segundos
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    return <div className="flex ">
        <p className="border-2 border-gray700 p-2 rounded-md" >{email}</p>
        <button className="bg-blue-700 p-2 text-white">{copied ? '¡Copiado!' : 'Copiar'}</button>
    </div>
}