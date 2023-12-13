import { api } from "@/lib/api"
import { ICard, IFoodCategory } from "@/types"
import { useState } from "react"

export const useMenuFilial = ()=>{
    const [foodCategorys, setFoodCategorys] = useState<IFoodCategory[]>([])
    const [itemsTrending, setItemsTrending] = useState<ICard[]>([])

    const getDataFilial = async (id: string) => {
        try{
            const config = {
                transformResponse: [function (data: any) {
                    
                    return data;
                }]
            }

            const res = await api.get(`/filials/getFilialByQrCode/${id}`, config)

            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        getDataFilial
    }
}