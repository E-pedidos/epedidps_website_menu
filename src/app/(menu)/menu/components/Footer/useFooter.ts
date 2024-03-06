import { useMenuContext } from "@/store/context/menuStore"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export const useFooter = () =>{
    const [renderFooter, setRenderFooter] = useState<boolean>(false)
    const path = usePathname()
    const router = useRouter()
    const {totalItems} = useMenuContext()

    if(path.startsWith('/menu/orders/success')) setRenderFooter(!renderFooter)

    const handleRouteBack = () =>{
        if(path.startsWith('/menu/')){
        return router.back()
        }
    }

    return {
        renderFooter,
        totalItems,
        handleRouteBack
    }
}