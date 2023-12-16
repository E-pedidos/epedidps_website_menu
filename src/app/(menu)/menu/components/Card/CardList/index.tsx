"use client";

import { useMenuContext } from "@/store/context/menuStore";
import Image from "next/image";
import { useState } from "react";

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
  const { addItemOrder, removeQuantifyOrder } = useMenuContext();
  const [count, setCount] = useState<number>(0);
  const [quantifyItem, setQuantifyItem] = useState<number>(0)


  const handleAdd = () => {
    setCount((prev) => prev + 1);
    addItemOrder({id, nameItemOrder: name, quantityItemOrder: count, valueItemOrder: Number(valor)});
  };

  const handleLess = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      removeQuantifyOrder(id)
    }
  };

  return (
    <div className="flex-col bg-white px-7 py-3 items-center justify-between gap-4 custom-border w-screen">
      <div className="flex items-center">
        <div className=" w-full">
          <h2 className="text-xs font-semibold">{name}</h2>
          <p className="text-xs">{description}</p>
        </div>
        <Image
          width={0}
          height={0}
          alt={name}
          src={photo_url}
          loading="lazy"
          sizes="100vw"
          style={{
            height: "auto",
            width: "auto",
            maxHeight: "28%",
            maxWidth: "28%",
          }}
        />
      </div>
      <div className="flex items-center justify-between gap-1">
        <span className="text-green-600">R$ {valor}</span>
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
