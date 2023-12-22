"use client";
import { Spiner } from "@/app/components/Loading";
import { useMenuContext } from "@/store/context/menuStore";
import { getItem, setItem } from "@/store/utils/localStorageUtils";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Avatar } from "../components/Avatar";
import { CardEmphasis } from "../components/Card/CardEmphasis";
import { CardList } from "../components/Card/CardList";
import { Emphasis } from "../components/Emphasis";
import { Information } from "../components/Information";
import { Menu } from "../components/Menu";
export default function MenuFilial() {
  const { id } = useParams();
  const {isLoading, avatarUrl, itemsTrending, foodCategorys, nameFilial} = useMenuContext()

  useEffect(() => {
    const idFilial = id.toString();
    const idFilialLocalStorage = getItem('idFilial')
    
    if(!idFilialLocalStorage || idFilialLocalStorage != idFilial) return setItem('idFilial', idFilial)
  }, []);

  return (
    <>
      {isLoading && <Spiner />}
      <main className="flex flex-col overflow-x-hidden pb-11 z-2 absolute top-24">
        <Information>
          { !isLoading ?
            <>
              <h1 className="font-bold tracking-wider text-x">{nameFilial}</h1>
              <Avatar image={avatarUrl} />
            </>
            : <Spiner />
          }
        </Information>
        <Emphasis>
          {itemsTrending.map((item) => {
            return <CardEmphasis key={item.id} {...item} />
          })}
        </Emphasis>
        {foodCategorys.map((item) => {
          return item.items.length > 0 ? (
            <Menu key={item.name} title={item.name}>
              {item.items.map((foodItem) => {
                return <CardList key={foodItem.id} {...foodItem} />
              })}
            </Menu>
          ) : (
            ""
          )
        })}
      </main>
    </>
  );
}
