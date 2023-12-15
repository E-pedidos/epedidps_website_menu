"use client";
import { ICardOrder } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IMenuProps {
  children: ReactNode;
}

interface IMenuContext {
  listItems: ICardOrder[];
  addItemOrder(item: ICardOrder): void;
  removeItemOrder(id: string): void;
  totalOrder: number;
}

export const MenuContext = createContext<IMenuContext>({} as IMenuContext);

export function MenuProvider({ children }: IMenuProps) {
  const [listItems, setListItems] = useState<ICardOrder[]>([]);
  const [totalOrder, setTotalOrder] = useState<number>(0);

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

  const removeItemOrder = (id: string) => {
    return setListItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    let value = 0;
    if (listItems.length > 0) {
      const res = listItems.reduce(
        (acumulador, currentValue) => acumulador + currentValue.valueItemOrder,
        value
      );
      setTotalOrder(res);
    }
  }, [listItems]);

  return (
    <MenuContext.Provider
      value={{
        listItems,
        addItemOrder,
        removeItemOrder,
        totalOrder,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
