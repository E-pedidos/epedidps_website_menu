"use client";

import { useMenuContext } from "@/store/menuStore";

export const ListItems = async () => {
  const { listItems } = useMenuContext();
  return (
    <>{listItems.length > 0 ? listItems.map((item) => "1") : "Não há items"}</>
  );
};
