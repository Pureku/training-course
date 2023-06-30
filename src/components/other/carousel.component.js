import React from "react";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../../app/globals.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Navigation } from "swiper";

const Carousel = () => {
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
  ];
  return (
    <>
      <div className="pb-4 pt-4 box-border min-w-0">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          style={{ padding: "5px" }}
        >
          {data.map((e) => {
            return (
              <>
                {" "}
                <SwiperSlide>
                  <div className="card card-compact w-[auto] h-[360px]  bg-base-100 shadow-md">
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
                      <div className="card-actions justify-end">
                        <button className="btn px-[25px] bg-[#f3db97]">
                          <svg
                            width="32px"
                            height="32px"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#707070"
                            stroke="#707070"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M59 61.922c0-9.768 13.016-15.432 22.352-11.615 10.695 7.017 101.643 58.238 109.869 65.076 8.226 6.838 10.585 17.695-.559 25.77-11.143 8.074-99.712 60.203-109.31 64.73-9.6 4.526-21.952-1.632-22.352-13.088-.4-11.456 0-121.106 0-130.873zm13.437 8.48c0 2.494-.076 112.852-.216 115.122-.23 3.723 3 7.464 7.5 5.245 4.5-2.22 97.522-57.704 101.216-59.141 3.695-1.438 3.45-5.1 0-7.388C177.488 121.952 82.77 67.76 80 65.38c-2.77-2.381-7.563 1.193-7.563 5.023z"
                                stroke="#bfbfbf"
                                fill-rule="evenodd"
                              />{" "}
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
