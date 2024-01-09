import { useMenuContext } from "@/store/context/menuStore";
import { useWebSocket } from "@/store/hook/useWeSocket";
import {
  getItem,
  getItemObject,
  setItem,
  setItemObject,
} from "@/store/utils/localStorageUtils";
import { ICardOrder, IOrder, IOrderUpdate } from "@/types";
import { useEffect, useState } from "react";

interface IFormOrder {
  client_name: string;
  observation: string;
  table_number: number;
}

export const useFormOrder = () => {
  const [isOrder, setIsOrder] = useState<boolean>(false);
  const [isModalOpenBartender, setIsModalOpenBartender] = useState(false);
  const [isModalOpenOrder, setIsModalOpenOrder] = useState(false);
  const [formOrder, setFormOrder] = useState<IFormOrder>({
    client_name: "",
    observation: "",
    table_number: 0,
  });
  const { listItems, totalOrder, setIsformsOrderContext, isformsOrderContext } =
    useMenuContext();

  const {
    filialConnectWebSocket,
    createOrderWebSocket,
    socket,
    connectWebSocket,
    disconnectWebSocket,
    updateOrderWebSocket,
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
    disconnectWebSocket();
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const idOrder = getItem("idOrder");
    if (idOrder) return;
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
            id: item.id,
            name: item.nameItemOrder,
            valor: Number(item.valueItemOrder * item.quantityItemOrder),
            quantity: Number(item.quantityItemOrder),
          })),
        ],
        updatedOrderItems: []
      };
      
      createOrderWebSocket(objFormOrder, idFilial!);

      socket!.on("new-order-added", (order: IOrder) => {
        if (order) {
          setIsOrder(true);
          setItem("idOrder", order.id!);
          setItemObject("listOrders", listItems);
          setItemObject("orders", order);

          disconnectWebSocket();
          closeModalOrder();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const idFilial = getItem("idFilial");
      const idOrder = getItem("idOrder");
      const orderList: ICardOrder[] = getItemObject("listOrders");
      const newItems: [] = [];

      filialConnectWebSocket(idFilial!); 

      const orderUpdate: IOrderUpdate = {
        observation: formOrder.observation ? formOrder.observation : "",
        total_valor: Number(totalOrder),
        actual_status: "newOrder",
        items: [
          ...listItems.map((item) => ({
            id: item.id,
            name: item.nameItemOrder,
            valor: Number(item.valueItemOrder * item.quantityItemOrder),
            quantity: Number(item.quantityItemOrder),
          })),
        ],
        newItems: newItems,
      };

      orderList.map((orderListItem) => {
        const matchingItem = listItems.find(item => item.nameItemOrder === orderListItem.nameItemOrder);
        if (matchingItem) {
          const quantityDifference =
            matchingItem.quantityItemOrder - orderListItem.quantityItemOrder;
          if (quantityDifference !== 0) {
            orderUpdate.newItems.push({
              id: orderListItem.id,
              name: orderListItem.nameItemOrder,
              valor: matchingItem.valueItemOrder * quantityDifference,
              quantity: quantityDifference,
            });
          }
        }
      });

      listItems.map((item) => {
        const matchingOrderItem = orderList.find(orderItem => orderItem.nameItemOrder === item.nameItemOrder);
        if (!matchingOrderItem) {
          orderUpdate.newItems.push({
            id: item.id,
            name: item.nameItemOrder,
            valor: item.valueItemOrder * item.quantityItemOrder,
            quantity: item.quantityItemOrder,
          });
        }
      });

      if(newItems.length === 0){
        closeModalOrder();
        return alert('Você não adicionou nada novo!')
      }
      console.log(orderUpdate);
      

      updateOrderWebSocket(orderUpdate, idFilial!, idOrder!);

      socket!.on("updated-order-added", (order: any) => {
        if(order){
          setItemObject("listOrders", listItems);
          setItemObject("orders", order);
          
          disconnectWebSocket();
          closeModalOrder();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const list = getItem("idOrder");

    if (list) {
      setIsOrder(true);
    }
  }, []);

  return {
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
    isOrder,
    handleUpdateOrder,
  };
};
