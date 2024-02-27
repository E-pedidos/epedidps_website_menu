"use client";
import { useMenuContext } from "@/store/context/menuStore";
import { formatCurrency } from "@/store/utils/formatCurrency";

export const TotalOrder = () => {
  const { totalOrder } = useMenuContext();
  return (
    <p>{totalOrder ? formatCurrency(totalOrder) : 'R$ 0,00'}</p>
  );
};
