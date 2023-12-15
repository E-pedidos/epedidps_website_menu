'use client'

import { ReactNode } from "react"

interface ProviderProp{
    children: ReactNode
}
export default function Provider({children}: ProviderProp){
    return (
        <div>
            {children}
        </div>
    )
}