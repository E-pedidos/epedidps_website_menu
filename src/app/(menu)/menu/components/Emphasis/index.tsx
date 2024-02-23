import { useMenuContext } from "@/store/context/menuStore"
import { CardEmphasis } from "../Card/CardEmphasis"

export const Emphasis = () => {
    const {itemsTrending} = useMenuContext()

    return (
        <nav className="bg-gradient-to-r from-red-500 to-orange-500 w-screen p-5">
            <h2 className="text-white font-normal mb-2">Destaques</h2>
            <ul className="flex items-center gap-2 overflow-x-auto w-full">
                {itemsTrending.map((item) => {
                    return <CardEmphasis key={item.id} {...item} />
                })}
            </ul>
        </nav>
    )
} 