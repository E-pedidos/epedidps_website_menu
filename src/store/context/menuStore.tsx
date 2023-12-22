"use client";
import { ICardOrder } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  setIsformsOrderContext(isformsOrderContext: boolean): void
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export function MenuProvider({ children }: IMenuProps) {
  const [listItems, setListItems] = useState<ICardOrder[]>([]);
  const [totalOrder, setTotalOrder] = useState<number>(0);
  const [isformsOrderContext, setIsformsOrderContext] = useState(false)

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

  return (
    <MenuContext.Provider
      value={{
        listItems,
        addItemOrder,
        removeItemOrder,
        totalOrder,
        removeQuantifyOrder,
        isformsOrderContext,
        setIsformsOrderContext
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export const useMenuContext = () => useContext(MenuContext);
