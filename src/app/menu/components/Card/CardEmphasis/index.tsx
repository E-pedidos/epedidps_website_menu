import Image from "next/image"

export const CardEmphasis = () => {
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
                    Sanduíche de rúcula
                </h2>
                <p className="text-xs">
                    R$ 19,99
                </p>
            </div>
        </div>
    )
}