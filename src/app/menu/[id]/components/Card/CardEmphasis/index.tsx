import { CardProps } from "../CardList"

export const CardEmphasis = ({name, photo_url, valor}: CardProps) => {
    return (
        <div className="flex flex-col bg-white rounded">
            <img src={photo_url}  className="w-40 h-40"/> 
            <div className="p-2">
                <h2 className="text-xs">
                    {name}
                </h2>
                <p className="text-xs">
                    R$ {valor}
                </p>
            </div>
        </div>
    )
}