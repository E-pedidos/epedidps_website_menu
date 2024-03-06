import { useMenuContext } from "@/store/context/menuStore"
import { usePathname, useRouter } from "next/navigation"

export const useFooter = () =>{
    const path = usePathname()
    const router = useRouter()
    const {totalItems} = useMenuContext()

    const handleRouteBack = () =>{
        if(path.startsWith('/menu/')){
        return router.back()
        }
    }

    return {
        totalItems,
        handleRouteBack,
        path
    }
}