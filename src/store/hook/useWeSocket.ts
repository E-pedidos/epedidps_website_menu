import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const useWebSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    try {
        const newSocket = io(process.env.NEXT_PUBLIC_API_URL!);
        setSocket(newSocket);

        return () => {
          newSocket.disconnect();
        };
      } catch (error) {
        console.error("Erro ao criar o WebSocket:", error);
      }
  }, []);

  return {
    socket,
  };
};
