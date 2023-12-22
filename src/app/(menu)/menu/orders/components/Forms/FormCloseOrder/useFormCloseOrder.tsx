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

  const handleSelecaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSelecoes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return {
    selecoes,
    handleSelecaoChange,
  }
};
