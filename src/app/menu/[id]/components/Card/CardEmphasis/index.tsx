import Image from "next/image"
import { CardProps } from "../CardList"

export const CardEmphasis = ({name, photo_url, valor}: CardProps) => {
    return (
        <div className="bg-white rounded">
            <Image
                width={160}
                height={160}
                alt="img"
                src='/card1.png'
                style={{
                    borderRadius: 4
                }}
            />
            <div className="w-40 p-2">
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