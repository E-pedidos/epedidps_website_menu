'use client'
import { MenuProvider } from "@/store/context/menuStore";
import { ReactNode } from "react";

interface ProviderProps{
    children: ReactNode
}
export default function ProvidersMenu({children}: ProviderProps){
    return (
        <MenuProvider>
            {children}
        </MenuProvider>
    )
}