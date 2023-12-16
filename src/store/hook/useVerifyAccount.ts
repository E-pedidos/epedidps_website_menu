import { api } from "@/lib/api"
import { useState } from "react"

export const useVerifyAccount = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const verify = async (token: string ) =>{
        try {
            const res = await api.post(
                `auth/verifyAccount/${token}`
            )

            if(res.status === 200){
                return setLoading(true);
            } else{
                setLoading(false);
                alert('erro interno!')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return{
        loading,
        verify
    }
}