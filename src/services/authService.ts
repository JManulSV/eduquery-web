import { FormEvent } from "react";
import { apiClient } from "./axiosInstance";
import { registerDataForm } from "@/types/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const loginUser = async (
  email: string,
  password: string,
  event: FormEvent<HTMLFormElement>,
  setErrors: Function,
  router: AppRouterInstance,
) => {
  event.preventDefault();
  try {
    const response = await apiClient.post("/auth/login", { email, password });
    const token = response.data.token;
    router.push('/')
    console.log(response);
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      setErrors("Las credenciales no son correctas :(");
    } else {
      setErrors("Ocurrió un error inesperado.");
    }
  }
};

export const registerUser = async (
  data: registerDataForm,
  setError: Function,
  router: AppRouterInstance
) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    router.push('/login');
  } catch (error: any) {
    if (error?.response?.status === 400 && error?.response?.data?.data) {
      const errorMessages = error.response.data.data as {
        [key: string]: string[];
      };
      Object.values(errorMessages).forEach((messages: string[]) => {
        if (messages.length > 0) {
          setError(messages[0]);
        }
      });
    }
    else if (error.status === 500) {
      setError("Error interno del servidor. Inténtalo más tarde.");
    }else{
        setError("Error interno de servidor favor de intentar en otro momento...");
        
    }
  }
};
