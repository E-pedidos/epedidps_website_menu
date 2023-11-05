import { Avatar } from "../Avatar"

export const Information = ()=>{
    return(
        <div 
        className="
        bg-white
        rounded-t-3xl
        flex 
        items-center 
        justify-evenly 
        w-screen
        h-32
        p-4
        z-10
        absolute
        top-24
        "
        >
            <h1 className="font-bold tracking-wider text-xl">EcoVibe Bistrô</h1>
            <Avatar />
        </div>
    )
}