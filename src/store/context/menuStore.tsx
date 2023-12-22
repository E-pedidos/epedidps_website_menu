"use client";
import { api } from "@/lib/api";
import { ICard, ICardOrder, IFoodCategory } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getItem } from "../utils/localStorageUtils";

interface IMenuProps {
  children: ReactNode;
}

interface IMenuContext {
  listItems: ICardOrder[];
  addItemOrder(item: ICardOrder): void;
  removeItemOrder(id: string): void;
  removeQuantifyOrder(id: string): void;
  totalOrder: number;
  isformsOrderContext: boolean
  setIsformsOrderContext(isformsOrderContext: boolean): void,
  foodCategorys: IFoodCategory[],
  itemsTrending: ICard[],
  nameFilial: string,
  avatarUrl: string,
  isLoading: boolean,
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export function MenuProvider({ children }: IMenuProps) {
  const [listItems, setListItems] = useState<ICardOrder[]>([]);
  const [totalOrder, setTotalOrder] = useState<number>(0);
  const [isformsOrderContext, setIsformsOrderContext] = useState(false)
  const [foodCategorys, setFoodCategorys] = useState<IFoodCategory[]>([])
  const [itemsTrending, setItemsTrending] = useState<ICard[]>([])
  const [nameFilial, setNameFilial] = useState<string>("")
  const [avatarUrl, setAvatarUrl] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  

  const addItemOrder = (item: ICardOrder) => {
    const isItem = listItems.find(
      (itemExisting) => itemExisting.id === item.id
    );

    if (isItem) {
      return setListItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, quantityItemOrder: prevItem.quantityItemOrder + 1 }
            : prevItem
        )
      );
    }

    return setListItems((prevItems) => [...prevItems, item]);
  };

  const removeQuantifyOrder = (id: string) => {
    const isItem = listItems.find((itemExisting) => itemExisting.id === id);

    if (isItem) {
      return setListItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === id
            ? { ...prevItem, quantityItemOrder: prevItem.quantityItemOrder - 1 }
            : prevItem
        )
      );
    }
  };

  const removeItemOrder = (id: string) => {
    return setListItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    let total = 0;

    if (listItems.length > 0) {
      const res = listItems.reduce((accumulator, currentItem) => {
        const itemTotal =
          currentItem.valueItemOrder * currentItem.quantityItemOrder;
        return accumulator + itemTotal;
      }, 0);

      total = res;
    }

    setTotalOrder(total);
  }, [listItems]);

 
  const getDataFilial = async () => {
    try {
      setIsLoading(true)
      const idFilialLocalStorage = getItem('idFilial')

      const { data } = await api.post(
        `/filials/getFilialByQrCode/${idFilialLocalStorage}`,
        {"sendKey": process.env.NEXT_PUBLIC_KEY_REQ_FILIAL},
      )
 
      if(data){
        setFoodCategorys(data.filial.foodCategory as IFoodCategory[])
        setAvatarUrl(data.filial.avatar_url)
        setNameFilial(data.filial.name)
        setItemsTrending(data.itemsTrending as ICard[])
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error)
    }finally {
      setIsLoading(false)
    }
  }

  useEffect(()=>{
      getDataFilial()
  }, [])

  const valuesContext: IMenuContext = {
    listItems,
    addItemOrder,
    removeItemOrder,
    totalOrder,
    removeQuantifyOrder,
    isformsOrderContext,
    setIsformsOrderContext, 
    foodCategorys,
    avatarUrl,
    isLoading,
    itemsTrending,
    nameFilial
  }

  return (
    <MenuContext.Provider
      value={valuesContext}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useMenuContext = () => useContext(MenuContext);
