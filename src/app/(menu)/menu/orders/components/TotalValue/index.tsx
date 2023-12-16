"use client";
import { useMenuContext } from "@/store/context/menuStore";

export const TotalOrder = () => {
  const { totalOrder } = useMenuContext();
  return (
    <p>{totalOrder ? totalOrder : '0,00'}</p>
  );
};
