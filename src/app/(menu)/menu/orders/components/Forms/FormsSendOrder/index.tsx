"use client";
import { Modal } from "@/app/components/Modal";
import { useFormOrder } from "./useFormSendOrder";

export const FormsSendOrder = () => {
  const {
    isForm,
    closeModalBartender,
    closeModalOrder,
    formOrder,
    handleForm,
    handleSubmitOrder,
    isModalOpenBartender,
    isModalOpenOrder,
    openModalBartender,
    openModalOrder,
    setFormOrder,
  } = useFormOrder();

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
};