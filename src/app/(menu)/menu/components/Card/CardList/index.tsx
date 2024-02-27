import Image from "next/image";
import { Counter } from "../components/Counter";

export type CardProps = {
  id: string;
  name: string;
  description: string;
  photo_url: string;
  valor: string;
};

export const CardList = ({
  id,
  name,
  description,
  photo_url,
  valor,
}: CardProps) => {
  
  return (
    <div className="flex-col bg-white px-7 py-3 items-center justify-between gap-4 custom-border w-screen">
      <div className="flex items-center">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-xs font-semibold">{name}</h2>
          <p className="text-xs text-ellipsis">{description}</p>
        </div>
        <Image
          width={80}
          height={80}
          alt={name}
          src={photo_url}
          loading="lazy"
        />
      </div>
      <Counter 
        id={id}
        name={name}
        valor={Number(valor)}
      />
    </div>
  );
};
