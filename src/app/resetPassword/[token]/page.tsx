'use client'
import { useResetPasswoord } from "@/hook/useResetPassword";
import { useParams } from "next/navigation";

export default function VerifyAccountId() {
  const { token } = useParams();
  const { 
    loading, 
    resetPassword,
    isVisible,
    newConfPassword,
    newPassword,
    setIsVisible,
    setNewConfPassword,
    setNewPassword
  } = useResetPasswoord();

  return (
    <div className="bg-[url('/background.png')] bg-cover  h-screen bg-orange-500 flex flex-col items-center pt-40 gap-4 px-2">
      {loading ? (
        <div className="text-center text-white bg-green-500 rounded-xl p-5 shadow-md">
          <h1>SUA SENHA FOI ATUALIZADA</h1>
          <span className="text-sm">você pode acessar o app agora</span>
        </div>
      ) : (
        <form className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col  items-start gap-2">
            <label 
                htmlFor="newPassword"
                className="font-semibold text-white"
            >
                Nova Senha:
            </label>
            <input
                className="bg-orange-500 rounded-lg p-1 text-white shadow-lg"
                type={isVisible ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />

            <label 
                htmlFor="newConfPassword"
                className="font-semibold text-white"
            >
                Confirmar Nova Senha:
            </label>
            <input
                className="bg-orange-500 rounded-lg p-1 text-white shadow-lg"
                type={isVisible ? "text" : "password"}
                id="newConfPassword"
                name="newConfPassword"
                value={newConfPassword}
                onChange={(e) => setNewConfPassword(e.target.value)}
                required
            />
          </div>

          <div 
            className="text-white mb-2"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <p>Esconder senha</p> : <p>Mostrar senha</p>}
          </div>
          <button
            className="bg-green-500 text-white p-2 rounded-lg shadow-lg hover:opacity-70"
            type="submit"
            onClick={(e) => {
                e.preventDefault();
                resetPassword(token.toString(), newPassword, newConfPassword);
              }}
          >
            Confirmar
          </button>
        </form>
      )}
    </div>
  );
}
