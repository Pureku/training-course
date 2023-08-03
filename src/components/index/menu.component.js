import React from "react";
import Card from "../other/card.component";

const Menu = () => {
  const data = [
    {
      title: "Card title!",
      detail: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Card title!",
      detail: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Card title!",
      detail: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      title: "Card title!",
      detail: "If a dog chews shoes whose shoes does he choose?",
    },
  ];
  return (
    <>
      <div className="menuh">
        <h2 className="lg:text-3xl  text-[#34454c]">เว็บไซต์ที่น่าสนใจ</h2>
      </div>
      <div className="box-border min-w-[0px] overflow-x-auto">
        <div className="bmenu grid-cols-4  gap-4">
          {data.map((e) => {
            return (
              <>
                <Card data={e} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
