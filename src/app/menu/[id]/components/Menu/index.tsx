import { IMenu } from "@/types"
import { CardList } from "../Card/CardList"

export const Menu = ({title, children}: IMenu) => {
    return (
        <section id={title}>
            <div className="custom-border pl-8 p-5 bg-white w-screen">
                <h1 className="text-base font-medium">
                    {title}
                </h1>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}