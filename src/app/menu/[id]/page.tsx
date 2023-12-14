"use client";
import { useParams } from "next/navigation";
import { Emphasis } from "./components/Emphasis";
import { Information } from "./components/Information";
import { Menu } from "./components/Menu";
import { useMenuFilial } from "@/hook/useMenuFilial";
import { useEffect } from "react";
import { CardList } from "./components/Card/CardList";
import { Footer } from "./components/Footer";
import { CardEmphasis } from "./components/Card/CardEmphasis";
export default function MenuFilial() {
  const { id } = useParams();
  const { getDataFilial, foodCategorys, itemsTrending } = useMenuFilial();

  useEffect(() => {
    const idFilial = id.toString();
    getDataFilial(idFilial);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden pb-11 z-2 absolute top-24">
        <Information />
        <Emphasis>
          {
            itemsTrending.length > 0 ?
            itemsTrending.map((item)=>{
              return (
                <CardEmphasis />
              )
            })
            : null
          }
        </Emphasis>
        {foodCategorys.map((item) => {
          return (
            item.items.length > 0 ?
            <Menu key={item.name} title={item.name}>
              {item.items.map((foodItem) => {
                return (
                  <CardList
                    key={foodItem.id}
                    {...foodItem}
                  />
                );
              })}
            </Menu>
            : ''
          );
        })}
      </div>
      <Footer />
    </>
  );
}
