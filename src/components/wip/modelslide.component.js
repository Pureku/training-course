import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../app/globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import BarChartCom from "../other/barchart.component";

import { FreeMode, Pagination, Navigation } from "swiper";

function ModelSlide() {
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
      <div className=" box-border min-w-0">
        <Swiper
          slidesPerView={2}
          spaceBetween={8}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((e) => {
            return (
              <>
                {" "}
                <SwiperSlide key={e.id}>
                  <div className="card card-compact w-[auto]   bg-base-100 shadow-sm">
                    <div>
                      <BarChartCom />
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
}
export default ModelSlide;
