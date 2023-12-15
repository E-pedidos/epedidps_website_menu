import { ICardOrder } from "@/types"


export const CardOrders = ({nameItemOrder, quantityItemOrder, valueItemOrder}: ICardOrder) => {
    let value;

    if(quantityItemOrder && valueItemOrder){
        value = (quantityItemOrder * valueItemOrder).toFixed(2);
    }

    return (
        <div className="w-full border-2 flex-col border-blue-500 py-5 px-3 rounded-2xl gap-1 mb-1">
            <h2 className="text-sm font-semibold">
                {nameItemOrder}
            </h2>
            <div className="flex items-center gap-3">
                    <h3>valor:</h3>
                    <p>R$ {value}</p>
            </div>
            <div className="flex items-center gap-3">
                    <h3>quantidade:</h3>
                    <p>{quantityItemOrder}</p>
            </div>
        </div>
    )
}