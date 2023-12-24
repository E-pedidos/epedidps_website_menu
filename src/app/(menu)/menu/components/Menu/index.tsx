import { IMenu } from "@/types"

export const Menu = ({title, children}: IMenu) => {
    return (
        <section id={title}>
            <div className="custom-border pl-8 p-3 bg-white w-screen">
                <h1 className="text-lg font-semibold">
                    {title}
                </h1>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}