"use client";
import { useMenuFilial } from "@/hook/useMenuFilial";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Avatar } from "../components/Avatar";
import { CardEmphasis } from "../components/Card/CardEmphasis";
import { CardList } from "../components/Card/CardList";
import { Emphasis } from "../components/Emphasis";
import { Information } from "../components/Information";
import { Menu } from "../components/Menu";
export default async function MenuFilial() {
  const { id } = useParams();
  const { getDataFilial, foodCategorys, itemsTrending, nameFilial, avatarUrl } =
    useMenuFilial();

  useEffect(() => {
    const idFilial = id.toString();
    getDataFilial(idFilial);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center overflow-x-hidden pb-11 z-2 absolute top-24">
        <Information>
          <h1 className="font-bold tracking-wider text-x">{nameFilial}</h1>
            <Avatar image={avatarUrl} />
        </Information>
          <Emphasis>
            {itemsTrending.map((item) => {
              return <CardEmphasis key={item.id} {...item} />;
            })}
          </Emphasis>
          {foodCategorys.map((item) => {
            return item.items.length > 0 ? (
              <Menu key={item.name} title={item.name}>
                {item.items.map((foodItem) => {
                  return <CardList key={foodItem.id} {...foodItem} />;
                })}
              </Menu>
            ) : (
              ""
            );
          })}
      </main>
    </>
  );
}
