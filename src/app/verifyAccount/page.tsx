import Image from "next/image";

export default function VerifyAccount (){
    return(
        <div 
        className="bg-[url('/background.png')] bg-cover  h-screen bg-orange-500 flex flex-col items-center pt-40 gap-4"
        >
            <p>Verifique aqui sua conta</p>
           <button>Clique aqui para verificar</button>
        </div>
    )
}