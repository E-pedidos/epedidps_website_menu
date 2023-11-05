export const CardOrders = () => {
    return (
        <div className="w-full border-2 flex-col border-blue-500 py-5 px-3 rounded-2xl gap-1 mb-1">
            <h2 className="text-sm font-semibold">
                Sanduíche de espinafreSanduíche de espinafre
            </h2>
            <div className="flex items-center gap-3">
                    <h3>valor:</h3>
                    <p>R$ 22,75</p>
            </div>
            <div className="flex items-center gap-3">
                    <h3>quantidade:</h3>
                    <p>1</p>
            </div>
        </div>
    )
}