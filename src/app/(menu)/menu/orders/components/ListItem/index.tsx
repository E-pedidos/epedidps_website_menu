"use client";


import { useMenuContext } from "@/store/context/menuStore";
import { CardOrders } from "../CardOrder";

export const ListItems = () => {
  const { listItems } = useMenuContext();
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
