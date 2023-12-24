import { useMenuContext } from "@/store/context/menuStore";
import { useWebSocket } from "@/store/hook/useWeSocket";
import { getItem, setItem, setItemObject } from "@/store/utils/localStorageUtils";
import { IOrder } from "@/types";
import { useState } from "react";

interface IFormOrder {
  client_name: string;
  observation: string;
  table_number: number;
}

export const useFormOrder = () => {
  const [isForm, setIsForm] = useState(false);
  const [isModalOpenBartender, setIsModalOpenBartender] = useState(false);
  const [isModalOpenOrder, setIsModalOpenOrder] = useState(false);
  const [formOrder, setFormOrder] = useState<IFormOrder>({
    client_name: "",
    observation: "",
    table_number: 0,
  });
  const { listItems, totalOrder, setIsformsOrderContext, isformsOrderContext } = useMenuContext();
  const {
    filialConnectWebSocket,
    createOrderWebSocket,
    socket,
    connectWebSocket,
    disconnectWebSocket
  } = useWebSocket();

  const openModalCloseOrder = () => {
    setIsModalOpenBartender(true);
  };

  const closeModalCloseOrder = () => {
    setIsModalOpenBartender(false);
  };

  const handleForm = () => {
    setIsModalOpenBartender(false);
    setIsformsOrderContext(!isformsOrderContext);
  };

  const openModalOrder = () => {
    setIsModalOpenOrder(true);
    connectWebSocket();
  };

  const closeModalOrder = () => {
    setIsModalOpenOrder(false);
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

      socket!.on("new-order-added", (order: IOrder) => {
        if(order){
          setItem('idOrder', order.id!)
          setItemObject('listOrders', order)

          disconnectWebSocket();
          closeModalOrder();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isForm,
    isModalOpenBartender,
    isModalOpenOrder,
    formOrder,
    setFormOrder,
    openModalCloseOrder,
    openModalOrder,
    closeModalCloseOrder,
    closeModalOrder,
    handleForm,
    handleSubmitOrder,
  };
};
