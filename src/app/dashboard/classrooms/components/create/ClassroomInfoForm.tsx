"use client";
import { useForm } from "react-hook-form";

interface Props {
  setData: Function;
  nextStep: Function;
  formData: {}
}

function ClassroomInfoForm({ setData, nextStep, formData }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setData({...data});
    console.log(formData)
    nextStep();
  };

  return (
    <form
      className="p-4 flex flex-col justify-around h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Nombre del salon: </label>
          <input
            type="text"
            id="title"
            className={`px-2 py-1 border-2 rounded-lg ${
              errors.title ? "border-red-500 text-red-500" : "border-gray-300"
            }`}
            placeholder="Ingresa un nombre para el salón. Ejemplo: 2A (2025)"
            {...register("title", {
              required: "Es requerido agregar un nombre",
              maxLength: {
                value: 50,
                message: "El título no puede tener más de 50 caracteres",
              },
            })}
          />
          {errors.title && typeof errors.title.message === "string" && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description">Descripcion*: </label>
          <textarea
            className={`px-2 py-1 border-2 rounded-lg ${
              errors.description
                ? "border-red-500 text-red-500"
                : "border-gray-300"
            }`}
            placeholder="Ingresa una descripcion para el salon"
            rows={5}
            {...register("description", {
              maxLength: {
                value: 70,
                message: "La descripcion no puede tener más de 30 caracteres",
              },
            })}
          />
          {errors.description &&
            typeof errors.description.message === "string" && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
        </div>
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
  );
}

export default ClassroomInfoForm;
