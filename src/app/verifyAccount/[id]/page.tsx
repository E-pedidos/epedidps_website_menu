"use client";
import { useVerifyAccount } from "@/hook/useVerifyAccount";
import { useParams } from "next/navigation";

export default function VerifyAccountId() {
  const { id } = useParams();
  const { loading, verify } = useVerifyAccount();

  return (
    <div className="bg-[url('/background.png')] bg-cover  h-screen bg-orange-500 flex flex-col items-center pt-40 gap-4 px-2">
      {loading ? (
        <div className="text-center text-white bg-green-500 rounded-xl p-5 shadow-md">
          <h1>SUA CONTA FOI VERIFICADA COM SUCESSO</h1>
          <p>Agradecemos sua preferência!</p>
          <span className="text-sm">você pode acessar o app agora</span>
        </div>
      ) : (
        <>
          <p className="text-lg font-bold text-white">
            Verifique aqui sua conta
          </p>
          <button 
          className="bg-orange-500 p-2 rounded-md shadow-xl text-white"
          onClick={()=> verify(id.toString())}
          >
            Clique aqui para verificar
          </button>
        </>
      )}
    </div>
  );
}
