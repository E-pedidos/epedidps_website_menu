"use client";
import { MenuContext } from "@/store/menuStore";
import { useContext } from "react";

export const ListItems = async () => {
  const { listItems } = useContext(MenuContext);
  return (
    <>{listItems.length > 0 ? listItems.map((item) => "1") : "Não há items"}</>
  );
};
