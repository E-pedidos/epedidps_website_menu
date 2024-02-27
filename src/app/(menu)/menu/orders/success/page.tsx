'use client'
import { getItem } from "@/store/utils/localStorageUtils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Success(){
    const [idFilial, setIdFilial] = useState<string>('')

    useEffect(()=>{
        const id = getItem('idFilial')

        if(id){
            setIdFilial(id)
        }
    }, [])
    
    return(
        <main>
            <h1>Aguarde, nosso atendente irá em sua mesa</h1>
            <Link
                href={`/menu/${idFilial}`}
            >
                Voltar para o cardápio
            </Link>
        </main>
    )
}