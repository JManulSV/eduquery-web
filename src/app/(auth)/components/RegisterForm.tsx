"use client";
import React, { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import { registerDataForm } from "@/types/auth";
import { registerUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerDataForm>();

  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const onSubmit = async (data:registerDataForm) => {
   registerUser(data, setError, router);
  };

  useEffect(() => {
    if(session){
      router.push("/dashboard");
    }
  }, [session])
  

  const registerOptions = {
    name: {
      required: "Es requerido ingresar un nombre",
      minLength: {
        value: 2,
        message: "Debe tener almenos 2 caracteres",
      },
      maxLength: {
        value: 100,
        message: "Maximo puede tener 100 caracteres.",
      },
    },
    email: {
      required: "Es requerido ingresar un correo electronico",
      minLength: {
        value: 2,
        message: "Debe tener almenos 2 caracteres",
      },
      maxLength: {
        value: 100,
        message: "Maximo puede tener 100 caracteres.",
      },
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "El correo electrónico no es válido",
      },
    },
    password: {
      required: "Es requerido ingresar una contraseña",
      minLength: {
        value: 6,
        message: "Debe tener almenos 6 caracteres",
      },
      maxLength: {
        value: 50,
        message: "Maximo puede tener 50 caracteres.",
      },
    },
    password_confirmation: {
      required: "Es requerido ingresar una contraseña",
      validate: (value: string) =>
        value === password || "Las contraseñas no coinciden",
    },
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
      <div className="flex flex-col gap-2 mb-4 ">
        {error && <span className="bg-red-600 p-1 px-2 text-white rounded-xl">{error}</span>}
        <label htmlFor="name" className="text-sm">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className={`p-2 rounded-2xl border-2 ${
            errors.name ? "border-red-600 bg-red-100" : "border-main"
          } `}
          {...register("name", registerOptions.name)}
        />
        {errors?.name && (
          <p className="text-[12px] text-red-600 p-2">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`p-2 rounded-2xl border-2 ${
            errors.email ? "border-red-600 bg-red-100" : "border-main"
          } `}
          {...register("email", registerOptions.email)}
        />
        {errors?.email && (
          <p className="text-[12px] text-red-600 p-2">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="password" className="text-sm">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className={`p-2 rounded-2xl border-2 ${
            errors.password ? "border-red-600 bg-red-100" : "border-main"
          } `}
          {...register("password", registerOptions.password)}
        />
        {errors?.password && (
          <p className="text-[12px] text-red-600 p-2">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-8">
        <label htmlFor="password_confirmation" className="text-sm">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="password_confirmation"
          className={`p-2 rounded-2xl border-2 ${
            errors.password_confirmation
              ? "border-red-600 bg-red-100"
              : "border-main"
          } `}
          {...register(
            "password_confirmation",
            registerOptions.password_confirmation
          )}
        />
        {errors?.password_confirmation && (
          <p className="text-[12px] text-red-600 p-2">
            {errors.password_confirmation.message}
          </p>
        )}
      </div>
      <SubmitButton value={"Registrarse"} />
    </form>
  );
}

export default RegisterForm;
