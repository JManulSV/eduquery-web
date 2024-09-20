"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import SubmitButton from "./SubmitButton";
import { loginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string>();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if(session){
      router.push("/dashboard");
    }
  }, [session])
  

  const handleOnChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      if (responseNextAuth?.status === 401) {
        setErrors("Las credenciales no son validas");
      }
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleOnSubmit} className="mt-10">
      <div className="flex flex-col gap-2 mb-4">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`p-2 rounded-2xl border-2 ${
            errors ? "border-red-600 bg-red-100" : "border-main"
          }`}
          onChange={handleOnChangeEmail}
        />
        {errors && (
          <div className="p-1 rounded-xl">
            <span className=" text-red-600  text-sm">{errors}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={`p-2 rounded-2xl border-2 ${
            errors ? "border-red-600 bg-red-100" : "border-main"
          }`}
          onChange={handleOnChangePassword}
        />
      </div>
      <div className="flex justify-end">
        <span className=" inline-block mb-8 text-left text-xs cursor-pointer underline font-semibold">
          Has olvidado tu contraseña
        </span>
      </div>
      <SubmitButton value={"Iniciar Sesion"} />
      <div className=" flex justify-center items-center gap-4 p-2 bg-white text-main border-2 border-main w-full rounded-2xl cursor-pointer">
        <FaGoogle className=" " />
        <p className="font-bold">Iniciar Sesion google</p>
      </div>
    </form>
  );
}

export default LoginForm;
