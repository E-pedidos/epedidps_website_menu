"use client";
import { Modal } from "../../../../../components/Modal";
import { useForm } from "./useForm";

export const FormsOrder = () => {
  const {
    isForm,
    closeModalBartender,
    closeModalOrder,
    formOrder,
    handleForm,
    handleSelecaoChange,
    handleSubmitOrder,
    isModalOpenBartender,
    isModalOpenOrder,
    openModalBartender,
    openModalOrder,
    selecoes,
    setFormOrder,
  } = useForm();

  if (!isForm) {
    return (
      <div className="flex-col mb-9 pl-3">
        <Modal
          title="Informações"
          isOpen={isModalOpenOrder}
          onClose={closeModalOrder}
        >
          <form className="flex flex-col gap-2" onSubmit={handleSubmitOrder}>
            <label>Seu Nome</label>
            <input
              className=" border-blue-500 border rounded-lg mt-2 p-1"
              placeholder="Nome"
              value={formOrder.client_name}
              onChange={(e) =>
                setFormOrder({ ...formOrder, client_name: e.target.value })
              }
            />
            <label>Sua mesa possui idêntificação?</label>
            <input
              className=" border-blue-500 border rounded-lg mt-2 p-1"
              placeholder="Ex: 1"
              value={formOrder.table_number}
              onChange={(e) =>
                setFormOrder({
                  ...formOrder,
                  table_number: Number(e.target.value),
                })
              }
            />
            <h3>tem alguma observação?</h3>
            <input
              className=" border-blue-500 border rounded-lg mt-2 p-1"
              placeholder="Ex: hamburguer sem salada"
              value={formOrder.observation}
              onChange={(e) =>
                setFormOrder({ ...formOrder, observation: e.target.value })
              }
            />
            <button
              className="mt-4 bg-green-500 text-white p-2 rounded ml-6"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </Modal>
        <div className="flex items-center gap-4">
          <h3>Deseja enviar seu pedido?</h3>
          <button
            className="bg-blue-500 p-1 rounded-2xl text-white font-medium my-2"
            onClick={openModalOrder}
          >
            Enviar
          </button>
        </div>
        <div className="flex w-full justify-center">
          <button
            className="bg-red-500 p-2 rounded-2xl text-white font-medium my-2"
            onClick={openModalBartender}
          >
            Garçom, quero encerrar
          </button>
        </div>
        <Modal
          isOpen={isModalOpenBartender}
          onClose={closeModalBartender}
          title="Tem certeza que deseja encerrar?"
        >
          <button
            onClick={closeModalBartender}
            className="mt-4 bg-red-500 text-white p-2 rounded"
          >
            Não
          </button>
          <button
            onClick={handleForm}
            className="mt-4 bg-green-500 text-white p-2 rounded ml-6"
          >
            Sim
          </button>
        </Modal>
      </div>
    );
  }

  if (isForm) {
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
  }
};
