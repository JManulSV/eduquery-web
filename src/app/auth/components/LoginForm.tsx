"use client"
import { apiClient } from "@/app/lib/axiosInstance";
import { ChangeEvent, useState } from "react"
import { FaGoogle } from "react-icons/fa"

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [status, setStatus] = useState(0);

    const handleOnChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleOnChangePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleOnSubmit = async(e:any) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/auth/login', {email, password});
            setStatus(response.status);
            console.log(response);
        } catch (error:any) {
            if (error.response && error.response.status === 401) { // Accede al código de estado desde el error
                setErrors('Las credenciales no son correctas :(');
            } else {
                setErrors('Ocurrió un error inesperado.');
            }
        }
        console.log(status);
    }


  return (
    <form onSubmit={handleOnSubmit} className="mt-10">
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="text-sm">Email</label>
            <input type="email" name="email" id="email" className={`p-2 rounded-2xl border-2 ${errors ? 'border-red-600 bg-red-100':'border-main'}`} onChange={handleOnChangeEmail} />
            {errors && <div className="p-1 rounded-xl"><span className=" text-red-600  text-sm">{errors}</span></div>}
        </div>
        <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="password" className="text-sm">Password</label>
            <input type="password" name="password" id="password" className="p-2 rounded-2xl border-2 border-main" onChange={handleOnChangePassword} />
        </div>
        <div className="flex justify-end">
            <span className=" inline-block mb-8 text-left text-xs cursor-pointer underline">Has olvidado tu contraseña</span>
        </div>
        <input type="submit" value="Iniciar Sesion" className="mb-6 p-2 bg-main text-white w-full rounded-2xl cursor-pointer"  />
        <div className=" flex justify-center items-center gap-4 p-2 bg-white text-main border-2 border-main w-full rounded-2xl cursor-pointer">
            <FaGoogle className=" " />
            <p>Iniciar Sesion google</p>
            
        </div>
    </form>
  )
}

export default LoginForm