import { IOrder } from "@/types";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const useWebSocket = () => {
  const [socket, setSocket] = useState<undefined | Socket>(undefined);

  const connectWebSocket = () =>{
    try {
      const newSocket = io(process.env.NEXT_PUBLIC_API_URL!);
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    } catch (error) {
      console.error("Erro ao criar o WebSocket:", error);
    }
  }

  const filialConnectWebSocket = (filial: string) => {
    try {    
      socket!.emit("enter-filial", filial, (message: any) => {
        console.log(message);
      });
    } catch (error) {
      console.error("Erro interno");
    }
  };

  const createOrderWebSocket = (order: IOrder, filial: string) => {
    try {
      socket!.emit("create-order", order, filial, () => {
        console.log("pedido envidado");
      });
    } catch (error) {
      console.error("Erro interno");
    }
  };

  return {
    socket,
    filialConnectWebSocket,
    createOrderWebSocket,
    connectWebSocket
  };
};
