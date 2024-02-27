import Image from "next/image"

export const HeaderHome = () => {
        return (
            <header className="flex flex-col bg-white overflow-x-hidden p-1">
                <div className="flex items-center w-screen justify-between">
                    <div className="flex-grow-1"/>
                    <div className="flex flex-col text-center">
                    <h1 className="text-3xl font-bold text-orange-500" >
                        <b className="text-cyan-500">
                            E
                        </b>
                        -PEDIDOS
                    </h1>
                    <p className="text-sm">Seu cardapio digital</p>
                    </div>
                    <Image
                        height={120}
                        width={120}
                        src="/logoPrimary.svg"
                        alt="logo e-pedidos"    
                    />
                </div>
            </header>
        )
    
}