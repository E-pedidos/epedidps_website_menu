import { CardProps } from "../CardList";

export const CardEmphasis = ({ name, photo_url, valor }: CardProps) => {
  return (
    <div className="flex flex-col rounded">
      <div className="w-40 h-40 object-cover">
        <img src={photo_url} className="w-40 h-40 object-cover" />
      </div>
      <div className="p-2 bg-white">
        <h2 className="text-xs">{name}</h2>
        <p className="text-xs">R$ {valor}</p>
      </div>
    </div>
  );
};
