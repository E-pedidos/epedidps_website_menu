
import Image from "next/image";
import { CardOrders } from "./components/CardOrder";
import { FormsOrder } from "./components/Form";

export default function OrdersPage() {
    return (
        <main className="bg-white flex-col items-center overflow-x-hidden h-full w-full">
            <section
                className="p-2 w-full h-screen mb-28"
            >
                <div className="flex items-center gap-9 mb-4 justify-center">
                    <h2 className="text-lg font-medium">
                        Seus Pedidos
                    </h2>
                    <Image
                        height={30}
                        width={30}
                        src='/list.svg'
                        alt="pedidos"
                    />
                </div>
                <div className="flex items-center gap-3 m-2 justify-center">
                    <h3 className="font-medium">Total:</h3>
                    <p>R$ 68,25</p>
                </div>
                <div className="h-3/6 w-full border flex-col border-blue-500 rounded-lg p-2 overflow-auto mb-1">
                    <CardOrders />
                    <CardOrders />
                    <CardOrders />
                    <CardOrders />
                    <CardOrders />
                </div>
                <FormsOrder />
            </section>
        </main>
    )
}