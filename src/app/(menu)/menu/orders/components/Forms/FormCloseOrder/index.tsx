'use client'
import { useFormCloseOrder } from "./useFormCloseOrder";

export const FormCloseOrder = () => {
  const { selecoes, handleSelecaoChange } = useFormCloseOrder();

  return (
    <div className="flex-col gap-2 pb-10 ml-5">
      <h1 className="text-center">Forma de pagamento</h1>
      <div className="flex gap-1">
        <input
          type="checkbox"
          id="dinheiro"
          checked={selecoes.dinheiro}
          onChange={handleSelecaoChange}
        />
        <label htmlFor="dinheiro">Dinheiro</label>
      </div>
      <div className="flex gap-1">
        <input
          type="checkbox"
          id="cartao"
          checked={selecoes.cartao}
          onChange={handleSelecaoChange}
        />
        <label htmlFor="cartao">Cartão</label>
      </div>
      <div className="flex gap-1">
        <input
          type="checkbox"
          id="pix"
          checked={selecoes.pix}
          onChange={handleSelecaoChange}
        />
        <label htmlFor="pix">Pix</label>
      </div>

      {selecoes.dinheiro && (
        <div className="mt-2 flex-col items-center">
          <label htmlFor="valor" className="font-semibold">
            Por favor, informe o valor que você entregará ao nosso atendente:
          </label>
          <span>
            Se houver troco, nosso atendente o fornecerá prontamente para
            agilizar o atendimento!
          </span>
          <input
            type="text"
            className="w-full border flex-col border-blue-500 rounded-2xl py-1 px-3 mt-2"
            id="valor"
          />
          <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2">
            Finalizar
          </button>
        </div>
      )}
      {selecoes.cartao && (
        <div className="mt-2 flex-col gap-1">
          <h1>Nosso atendente trará a máquina de cartão para você.</h1>
          <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2">
            Finalizar
          </button>
        </div>
      )}
      {selecoes.pix && (
        <div className="mt-2 flex-col justify-center items-center gap-2">
          <h1 className="font-semibold mb-3">
            Você selecionou pagamento com Pix
          </h1>
          <p>Chave celular:</p>
          <p className="font-semibold my-3">98 999999999</p>
          <h2>
            este é nosso pix, pague e mostre o comprovante ao nosso atendente
          </h2>
          <button className="bg-blue-500 p-2 rounded-2xl text-white font-medium my-2">
            Finalizar
          </button>
        </div>
      )}
    </div>
  );
};
