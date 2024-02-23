'use client'
import { Spiner } from "@/app/components/Loading"
import { useMenuContext } from "@/store/context/menuStore"
import Image from "next/image"

export const Avatar = () => {
  const {isLoading, avatarUrl, nameFilial} = useMenuContext()

    return (
      <>
        {
          !isLoading ?
          <>
            <h1 className="font-bold tracking-wider text-x">{nameFilial}</h1>
            {
              avatarUrl &&
              <div
                className="h-20 w-20 border-4 border-blue-500 rounded-full"
              >
                <Image 
                  src={avatarUrl}
                  height={80}
                  width={80}
                  alt={`logo ${nameFilial}`}
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </div>
            }
          </>
          : <Spiner />
        }
      </>
    )
}

