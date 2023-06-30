import React from "react";

const Menu = () => {
  return (
    <>
      <div className="menuh">
        <h2 className="lg:text-3xl  text-[#34454c]">คอร์สเรียนที่น่าสนใจ</h2>
      </div>
      <div className="box-border min-w-[0px] overflow-x-auto">
        <div className="bmenu grid-cols-4  gap-4">
          <div className="card w-[auto] bg-[#EEEEEE] text-[#537188] transition duration-300 transform hover:scale-105">
            <div className="card-body">
              <h1 className="card-title ">Card title!</h1>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn border-[#fbc424] bg-[#fbc424] text-[#537188]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[auto] bg-[#EEEEEE] text-[#537188]">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn border-[#fbc424] bg-[#fbc424] text-[#537188]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[auto] bg-[#EEEEEE] text-[#537188]">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn border-[#fbc424] bg-[#fbc424] text-[#537188]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="card w-[auto] bg-[#EEEEEE] text-[#537188]">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn border-[#fbc424] bg-[#fbc424] text-[#537188]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
