import Image from "next/image";
import { ListItems } from "./components/ListItem";
import { TotalOrder } from "./components/TotalValue";
import { FormsSendOrder } from "./components/Forms/FormsSendOrder";
import { FormCloseOrder } from "./components/Forms/FormCloseOrder";

export default function OrdersPage() {
    
    return (
        <main className="bg-white flex-col items-center overflow-x-hidden">
            <section
                className="p-2"
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
                    <TotalOrder />
                </div>
                <div className="h-80 border flex-col border-blue-500 rounded-lg p-2 overflow-auto mb-1">
                    <ListItems />
                </div>
               <FormsSendOrder />
               <FormCloseOrder />
            </section>
        </main>
    )
}