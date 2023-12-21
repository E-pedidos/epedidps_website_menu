import { useMenuContext } from "@/store/context/menuStore";
import { useWebSocket } from "@/store/hook/useWeSocket";
import { getItem } from "@/store/utils/localStorageUtils";
import { IOrder } from "@/types";
import { useState } from "react";

interface ISelecoes {
  dinheiro: boolean;
  cartao: boolean;
  pix: boolean;
}

interface IFormOrder {
  client_name: string;
  observation: string;
  table_number: number;
}

export const useForm = () => {
  const [isForm, setIsForm] = useState(false);
  const [isModalOpenBartender, setIsModalOpenBartender] = useState(false);
  const [isModalOpenOrder, setIsModalOpenOrder] = useState(false);
  const [selecoes, setSelecoes] = useState<ISelecoes>({
    dinheiro: false,
    cartao: false,
    pix: false,
  });
  const [formOrder, setFormOrder] = useState<IFormOrder>({
    client_name: "",
    observation: "",
    table_number: 0,
  });
  const { listItems, totalOrder } = useMenuContext();
  const { filialConnectWebSocket, createOrderWebSocket, socket } = useWebSocket();

  const openModalBartender = () => {
    setIsModalOpenBartender(true);
  };

  const closeModalBartender = () => {
    setIsModalOpenBartender(false);
  };

  const handleForm = () => {
    setIsModalOpenBartender(false);
    setIsForm(true);
  };

  const openModalOrder = () => {
    setIsModalOpenOrder(true);
  };

  const closeModalOrder = () => {
    setIsModalOpenOrder(false);
  };

  const handleSelecaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSelecoes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const idFilial = getItem("idFilial");

      filialConnectWebSocket(idFilial!);

      const objFormOrder: IOrder = {
        ...formOrder,
        filialId: idFilial!,
        total_valor: Number(totalOrder),
        actual_status: "open",
        items: [
          ...listItems.map((item) => ({
            name: item.nameItemOrder,
            valor: Number(item.valueItemOrder * item.quantityItemOrder),
            quantity: Number(item.quantityItemOrder),
          })),
        ],
      };

      createOrderWebSocket(objFormOrder, idFilial!);

      socket!.on("new-order-added", (order) => {
        console.log("pedido do socket");
        console.log(order);
      });
      closeModalOrder();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isForm,
    isModalOpenBartender,
    isModalOpenOrder,
    selecoes,
    setSelecoes,
    formOrder,
    setFormOrder,
    openModalBartender,
    openModalOrder,
    closeModalBartender,
    closeModalOrder,
    handleForm,
    handleSelecaoChange,
    handleSubmitOrder
  }
};
