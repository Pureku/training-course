import React from "react";

const Section = () => {
  const imgList = [
    {
      title: "MT9A0",
      src: "https://raw.githack.com/Pureku/training-course/main/src/img/thumbnail.svg?raw=true",
    },
    {
      title: "MT910",
      src: "https://raw.githack.com/Pureku/training-course/main/src/img/thumbnail.svg?raw=true",
    },
    {
      title: "MT920",
      src: "https://raw.githack.com/Pureku/training-course/main/src/img/thumbnail.svg?raw=true",
    },
    {
      title: "MT930",
      src: "https://raw.githack.com/Pureku/training-course/main/src/img/thumbnail.svg?raw=true",
    },
    {
      title: "MT940",
      src: "https://raw.githack.com/Pureku/training-course/main/src/img/thumbnail.svg?raw=true",
    },
    {
      title: "MT950",
      src: "https://raw.githack.com/Pureku/training-course/main/src/img/thumbnail.svg?raw=true",
    },
  ];
  return (
    <>
      <div className="sch lg:text-3xl pb-[45px]">
        <h2 className="text-[#3b4042]">คอร์สเรียนสำหรับแผนก</h2>
      </div>
      <div className="box-border min-w-0">
        <div className="w-[1120px]">
          <div className="scb xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {imgList.map((e) => {
              return (
                <a className="ascdt">
                  <div className="card w-[auto] bg-[#f9f9f9]">
                    <figure className="px-10 pt-10 transition duration-300 transform hover:scale-150">
                      <img src={e.src} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{e.title}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
