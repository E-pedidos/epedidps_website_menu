'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  const handleMenuClick = () => {
    router.back();
  };
  return (
    <footer className="bg-white flex items-center justify-center gap-10 w-full p-3 fixed bottom-0 custom-border-top">
       <div className="group relative" onClick={handleMenuClick}>
        <Image
          height={20}
          width={20}
          src="/home.svg"
          alt="home"
          className="transition-transform transform scale-100 group-hover:scale-125"
        />
      </div>
      <div className="group relative">
        <Link
          href='/orders'
          prefetch
        >
          <Image
            height={18}
            width={18}
            src="/list.svg"
            alt="list"
            className="transition-transform transform scale-100 group-hover:scale-125"
          />
        </Link>
      </div>
    </footer>
  )
}
