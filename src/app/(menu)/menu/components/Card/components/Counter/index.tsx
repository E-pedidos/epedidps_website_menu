'use client'
import { useMenuContext } from "@/store/context/menuStore";
import { formatCurrency } from "@/store/utils/formatCurrency";
import { useEffect, useState } from "react";
import { cssTransition, toast } from "react-toastify";

type CouterProps = {
    id: string,
    name: string,
    valor: number
}

export const Counter = ({id, name, valor}: CouterProps) => {
    const { addItemOrder, removeQuantifyOrder, listItems } = useMenuContext();
    const [count, setCount] = useState<number>(0);
    const [quantifyItem, setQuantifyItem] = useState<number>(1)

    const handleAdd = () => {
        const objOrder = {
            id, 
            nameItemOrder: name, 
            quantityItemOrder: quantifyItem, 
            valueItemOrder: Number(valor)
        }

        setCount((prev) => prev + 1);
        setQuantifyItem(count + quantifyItem)
        addItemOrder(objOrder);
        toast('Item adicionado!', {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };
  
    const handleLess = () => {
      if (count > 0) {
        setCount((prev) => prev - 1);
        toast('Item removido!', {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
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

    return(
        <div className="flex items-center justify-between gap-1">
            <span className="text-green-700 font-semibold">{formatCurrency(valor)}</span>
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
    )
}