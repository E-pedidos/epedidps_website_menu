import { ReactNode } from "react"

export interface ICard {
    title: string
    description: string
    price: string | number
    img: string
}

export interface IMenu {
    title: string
}

export interface ModalProps {
    title: string
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}