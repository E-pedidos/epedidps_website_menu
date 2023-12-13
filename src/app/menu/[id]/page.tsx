"use client";
import { useParams } from "next/navigation";
import { Emphasis } from "./components/Emphasis";
import { Information } from "./components/Information";
import { Menu } from "./components/Menu";
import { useMenuFilial } from "@/hook/useMenuFilial";
import { useEffect } from "react";
import { CardList } from "./components/Card/CardList";
import { Footer } from "./components/Footer";
export default function MenuFilial() {
  const { id } = useParams();
  const { getDataFilial } = useMenuFilial();

  useEffect(() => {
    const idFilial = id.toString();
    getDataFilial(idFilial);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden mb-11">
        <Information />
        <Emphasis />
        <Menu title="pratos">
          <CardList />
        </Menu>
      </div>
      <Footer />
    </>
  );
}
