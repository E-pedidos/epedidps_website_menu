import { api } from "@/lib/api";
import { useState } from "react";

export const useResetPasswoord = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [newConfPassword, setNewConfPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const resetPassword = async (
    token: string,
    newPassword: string,
    newConfPassword: string
  ) => {
    
    if(newPassword !== newConfPassword){
        return alert('As senhas devem ser iguais!!')
    }

    if(newPassword.length < 7 && newConfPassword.length < 7){
        return alert('A senha deve ter 8 ou mais digitos!!')
    }

    try {
      const obj = {
        newPassword,
        newConfPassword,
      };

      const res = await api.post(`/auth/resetPassword/${token}`, obj);

      if (res.status === 201) {
        return setLoading(true);
      } else {
        setLoading(false);
        alert("erro interno!");
      }
    } catch (error: any) {
        alert(`${error?.response.data.message}`)
      console.error(error);
    }
  };

  return {
    loading,
    resetPassword,
    newPassword,
    setNewPassword,
    newConfPassword,
    setNewConfPassword,
    isVisible,
    setIsVisible
  };
};
