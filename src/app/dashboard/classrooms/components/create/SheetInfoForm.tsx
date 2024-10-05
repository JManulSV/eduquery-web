import { ClassroomCreate } from "@/types/create";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
    setData: Function;
    nextStep: Function;
    prevStep: Function;
    formData: ClassroomCreate
  }

export default function SheetInfoForm({setData, nextStep, formData, prevStep}:Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    nextStep();
    setData({...formData, ...data});
  };
  useEffect(() => {
    reset({id_sheet: formData.id_sheet});
  }, [formData])

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
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="id_sheet">Id de sheet</label>
          <input
            type="text"
            id="id_sheet"
            {...register('id_sheet', {required: "No puede estar vacio este cambpo", maxLength:{value: 15, message:"El codigo no puede se mayor a 15 digitos"}})}
            className={`px-2 py-1 border-2 rounded-lg ${
              errors.id_sheet
                ? "border-red-500 text-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.id_sheet && typeof errors.id_sheet.message === "string" && (
            <span className="text-red-500 text-sm">{errors.id_sheet.message}</span>
          )}
        </div>
        <div className="mt-10 mb-10">
          <p className="mb-5">
            Comparte el sheet con todos los permisos a la cuenta del servicio
            para poder tener acceso a los datos:
          </p>
            <CopyEmailComponent email={'example@email.com'} />
        </div>
        <div className="flex justify-between p-4">
        <button className="border border-main rounded-md p-2 hover:font-bold" onClick={() => prevStep()}>
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

interface Prop{
    email: string
}

const CopyEmailComponent = ({ email}:Prop) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
        e.preventDefault()
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="flex items-center">
      <p className="border-2 border-gray-300 p-2 rounded-md w-[300px]">{email}</p>
      <button onClick={(e)=>handleCopy(e)} className="bg-blue-700 p-2 text-white ml-2 rounded-md">
        {copied ? '¡Copiado!' : 'Copiar'}
      </button>
    </div>
  );
};
