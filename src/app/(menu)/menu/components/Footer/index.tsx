'use client'
import { useMenuContext } from "@/store/context/menuStore";
import { getItem } from "@/store/utils/localStorageUtils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Footer = () => {
  const path = usePathname()
  const [idFilial, setIdFilial] = useState<string>('')
  const {totalItems} = useMenuContext()
  
  useEffect(()=>{
    const id = getItem('idFilial')

    if(id){
        setIdFilial(id)
    }
  }, [])

  if(path.startsWith('/menu/orders/success')){
    return null;
  }


  return (
    <footer className="bg-white flex items-center justify-center gap-10 w-full p-3 fixed bottom-0 custom-border-top">
        
        <Link 
          href={`/menu/${idFilial}`}
        >
          <Image
            height={20}
            width={20}
            src="/home.svg"
            alt="home"
            className="transition-transform transform scale-100 group-hover:scale-125"
          />
        </Link>
     
        <Link
          href='/menu/orders'
          className="relative"
        >
          {
            totalItems > 0 && (
              <div className="flex items-center justify-center absolute top-[-4px] right-3 z-50 h-4 w-4 rounded-full bg-blue-700 text-white">
                <span className="text-sm font-bold">
                  {totalItems}
                </span>
              </div>
            )
          }
          <Image
            height={18}
            width={18}
            src="/list.svg"
            alt="list"
            className="transition-transform transform scale-100 group-hover:scale-125"
          />
        </Link>
     
    </footer>
  )
}
