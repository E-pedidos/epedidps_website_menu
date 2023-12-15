'use client'
import { MenuProvider } from "@/store/menuStore";
import { ReactNode } from "react";

interface ProviderProps{
    children: ReactNode
}
export default function Providers({children}: ProviderProps){
    return (
        <MenuProvider>
            {children}
        </MenuProvider>
    )
}