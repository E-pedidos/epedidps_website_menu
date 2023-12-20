import { api } from "@/lib/api";
import { ICard, IFoodCategory } from "@/types";
import { useState } from "react";

export const useMenuFilial = () => {
  const [foodCategorys, setFoodCategorys] = useState<IFoodCategory[]>([])
  const [itemsTrending, setItemsTrending] = useState<ICard[]>([])
  const [nameFilial, setNameFilial] = useState<string>("")
  const [avatarUrl, setAvatarUrl] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const getDataFilial = async (id: string) => {
    try {
      setIsLoading(true)
      const config = {
        transformResponse: [
          function (data: any) {
            const dataResponse = JSON.parse(data)
            
            const payload = {
              foodCategorys: dataResponse.filial.foodCategorys,
              avatarUrl: dataResponse.filial.franchise.user.avatar_url,
              name: dataResponse.filial.name
            }

            const itemsIsTrending = dataResponse.itemsTrending

            return {
              payload,
              itemsIsTrending,
            }
          },
        ],
      }

      const { data } = await api.post(
        `/filials/getFilialByQrCode/${id}`,
        {"sendKey": process.env.NEXT_PUBLIC_KEY_REQ_FILIAL},
        config
      )

      const foodCategorysResponse: IFoodCategory[] = data.payload.foodCategorys
      const isTrendingResponse: ICard[] = data.itemsIsTrending

      setFoodCategorys(foodCategorysResponse)
      setAvatarUrl(data.payload.avatarUrl)
      setNameFilial(data.payload.name)
      setItemsTrending(isTrendingResponse)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }finally {
      setIsLoading(false)
    }
  }

  return {
    getDataFilial,
    foodCategorys,
    avatarUrl,
    itemsTrending,
    nameFilial,
    isLoading
  }
}
