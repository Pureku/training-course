import React, { useState } from "react";
import { slice, concat } from "lodash";
import Showmore from "../other/showmore.component";

let data = [
  {
    id: 1,
    title: "Card 1",
    detail: "welcome to card 1",
  },
  {
    id: 2,
    title: "Card 2",
    detail: "welcome to card 2",
  },
  {
    id: 3,
    title: "Card 3",
    detail: "welcome to card 3",
  },
  {
    id: 4,
    title: "Card 4",
    detail: "welcome to card 4",
  },
  {
    id: 5,
    title: "Card 5",
    detail: "welcome to card 5",
  },
  {
    id: 6,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 7,
    title: "Card 7",
    detail: "welcome to card 7",
  },
  {
    id: 8,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 9,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 10,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 11,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
  {
    id: 12,
    title: "Card 6",
    detail: "welcome to card 6",
  },
];

let LENGTH = data.length;
const DATA = [...Array(LENGTH).keys()];
const LIMIT = 10;

const DetailCourse = () => {
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <>
      <div className="max-h-[100vh] h-[100vh] overflow-y-auto pr-2">
        <div className="grid grid-cols-3 gap-4">
          {list.map((e) => {
            return (
              <>
                <div className="card static card-compact w-[auto] h-[300px]  bg-base-100 shadow-md rounded-md cursor-pointer ">
                  <figure>
                    <img
                      src={
                        "https://raw.githack.com/Pureku/training-course/main/src/img/original.jpg?raw=true"
                      }
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{e.title}</h2>
                    <p>{e.detail}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      {showMore && (
        <div onClick={loadMore}>
          <Showmore />
        </div>
      )}
    </>
  );
};

export default DetailCourse;
