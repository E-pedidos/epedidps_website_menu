import { api } from "@/lib/api";
import { ICard, IFoodCategory } from "@/types";
import { useState } from "react";

export const useMenuFilial = () => {
  const [foodCategorys, setFoodCategorys] = useState<IFoodCategory[]>([]);
  const [itemsTrending, setItemsTrending] = useState<ICard[]>([]);
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  const getDataFilial = async (id: string) => {
    try {
      const config = {
        transformResponse: [
          function (data: any) {
            const dataResponse = JSON.parse(data);

            const payload = {
              foodCategorys: dataResponse.filial.foodCategorys,
              avatarUrl: dataResponse.filial.franchise.user.avatar_url,
            };

            const itemsIsTrending = dataResponse.itemsTrending;

            return {
              payload,
              itemsIsTrending,
            };
          },
        ],
      };

      const { data } = await api.get(
        `/filials/getFilialByQrCode/${id}`,
        config
      );

      const foodCategorysResponse: IFoodCategory[] = data.payload.foodCategorys;
      const isTrendingResponse: ICard[] = data.itemsTrending

      setFoodCategorys(foodCategorysResponse);
      setAvatarUrl(data.payload.avatar_url);
      setItemsTrending(isTrendingResponse)
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getDataFilial,
    foodCategorys,
    avatarUrl,
    itemsTrending
  };
};
