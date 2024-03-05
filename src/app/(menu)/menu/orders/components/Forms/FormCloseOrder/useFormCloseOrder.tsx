import { useWebSocket } from "@/store/hook/useWeSocket";
import { getItem, remove } from "@/store/utils/localStorageUtils";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ISelecoes {
  dinheiro: boolean;
  cartao: boolean;
  pix: boolean;
}

export const useFormCloseOrder = () => {
  const [selecoes, setSelecoes] = useState<ISelecoes>({
    dinheiro: false,
    cartao: false,
    pix: false,
  });
  const [money, setMoney] = useState<number>(0)
  const {filialConnectWebSocket, closeOrderWebSocket, disconnectWebSocket, socket, connectWebSocket} = useWebSocket()
  const [formOrder, setFormOrder] = useState({
    observation: "",
  });
  const {push} = useRouter()
  

  const handleSelecaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked, value } = event.target;
    setSelecoes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
    connectWebSocket()
    return setFormOrder({observation: value})
  };

  const handleCloseOrder = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const idFilial = getItem("idFilial");
      const idOrder = getItem("idOrder");
      
      filialConnectWebSocket(idFilial!);
      let observationValue;
      
      if(formOrder.observation === "dinheiro"){
        observationValue = formOrder.observation + ", valor informado:"+ money
      } else {
        observationValue = `Forma de pagamento: ${formOrder.observation}`
      }

      const orderUpdate = {
        observation: observationValue,
        actual_status: "pending",
        items: []
      };
       
      closeOrderWebSocket(orderUpdate, idFilial!, idOrder!);

      socket!.on("updated-order-added", (order: any) => {
        if(order){
          if(order){
            remove('orders')
            remove('listOrders')
            remove('idOrder')
            disconnectWebSocket();
            push(`/menu/orders/success/${idFilial}`)
          }
        } else {
          alert('Algo deu errado!')
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    selecoes,
    handleSelecaoChange,
    formOrder,
    handleCloseOrder,
    money,
    setMoney
  }
};

