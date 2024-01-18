"use client";
import { useMenuContext } from "@/store/context/menuStore";
import { CardOrders } from "../CardOrder";
import { useEffect } from "react";

export const ListItems = () => {
  const { listItems, removeItemOrder } = useMenuContext();

  useEffect(()=>{
    if(listItems.length > 0){
      const item = listItems.find(i => i.quantityItemOrder === 0)
      if (item && item.quantityItemOrder !== undefined) {
        removeItemOrder(item!.id!)
      }
    }
  },[listItems])

  return (
    <>{
      listItems.length > 0 ? 
      listItems.map((item)=>{
        return (
          <CardOrders 
            key={item.id}
            id={item.id}
            nameItemOrder={item.nameItemOrder}
            quantityItemOrder={item.quantityItemOrder}
            valueItemOrder={item.valueItemOrder}
          />
        )
      }) 
      : "Não há items"}</>
  );
};
