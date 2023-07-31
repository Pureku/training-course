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
                <SwiperSlide key={e.id}>
                  <div className="card card-compact w-[auto] h-[300px]  bg-base-100 shadow-md">
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
