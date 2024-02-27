"use client";
import { useMenuContext } from "@/store/context/menuStore";
import { formatCurrency } from "@/store/utils/formatCurrency";
import Image from "next/image";
import { useEffect, useState } from "react";

export type CardProps = {
  id: string;
  name: string;
  description: string;
  photo_url: string;
  valor: string;
};

export const CardList = ({
  id,
  name,
  description,
  photo_url,
  valor,
}: CardProps) => {
  const { addItemOrder, removeQuantifyOrder, listItems } = useMenuContext();
  const [count, setCount] = useState<number>(0);
  const [quantifyItem, setQuantifyItem] = useState<number>(1)

  const handleAdd = () => {
    setCount((prev) => prev + 1);
    setQuantifyItem(count + quantifyItem)
    addItemOrder({id, nameItemOrder: name, quantityItemOrder: quantifyItem, valueItemOrder: Number(valor)});
  };

  const handleLess = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
     return removeQuantifyOrder(id)
    }
  };

  useEffect(()=>{
    if(listItems.length > 0){
      const isItem = listItems.find(item => item.id === id)
      if (isItem && isItem.quantityItemOrder !== undefined) {
        setCount(isItem.quantityItemOrder);
      }
    }
  },[ listItems])

  return (
    <div className="flex-col bg-white px-7 py-3 items-center justify-between gap-4 custom-border w-screen">
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-xs font-semibold">{name}</h2>
          <p className="text-xs text-ellipsis">{description}</p>
        </div>
        <Image
          width={80}
          height={80}
          alt={name}
          src={photo_url}
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="text-green-700 font-semibold">{formatCurrency(Number(valor))}</span>
        <div className="flex gap-2 mr-16 pr-8">
          <button className="text-gray-500 text-sm" onClick={handleLess}>
            -
          </button>
          <div className="w-8 border border-gray-500 rounded text-center">
            {count}
          </div>

          <button className="text-gray-500" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
