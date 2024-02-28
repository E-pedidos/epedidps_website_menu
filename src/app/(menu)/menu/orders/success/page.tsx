'use client'
import { getItem } from "@/store/utils/localStorageUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Success(){
    const [idFilial, setIdFilial] = useState<string>('')
    const {push} = useRouter()

    useEffect(()=>{
        const id = getItem('idFilial')

        if(id){
            setIdFilial(id)
        }
    }, [])
    
    return(
        <main className="h-screen bg-orange-500 bg-[url('/background.png')] bg-cover flex items-center justify-center">
            <div className="bg-white p-2 rounded-xl flex flex-col items-center justify-center gap-4">
                <Image 
                    src='/logoPrimary.svg'
                    height={80}
                    width={80}
                    alt="Logo e-pedidos"
                />
                <h1 className="font-bold text-base">
                    Aguarde, nosso atendente irá em sua mesa
                </h1>
                <p className="font-semibold">
                    Nós agradecemos sua preferência!
                </p>
                <button
                    onClick={()=> push(`/menu/${idFilial}`)}
                    className="bg-green-500 p-2 rounded text-white font-semibold"
                >
                    Voltar para o cardápio
                </button>
            </div>
        </main>
    )
}