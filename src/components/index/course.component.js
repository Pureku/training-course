import React from "react";

const Course = () => {
  return (
    <>
      <div className="csh">
        <div>
          <h3 className="text-[#665d1d] pb-[10px]">New Training Course</h3>
          <h1 className="lg:text-3xl  text-[#34454c]">
            เพิ่มทักษะแบบใหม่กับเรา
          </h1>
        </div>
        <div className="csct">
          <div className="box-border min-w-0">
            <div className="csb">
              <img
                src={
                  "https://raw.githack.com/Pureku/training-course/main/src/img/training01.jpg?raw=true"
                }
                alt=""
              />
              <div className="box-border min-w-0">
                <h1 className="text-left lg:text-2xl">
                  Future of New Operation Standard
                </h1>
                <p className="m-[12px] text-left">
                  คอร์สการเรียนรู้แบบใหม่ สะดวก รวดเร็ว ทันใจ
                  เพื่อพัฒนาความสามารถของพนักงานให้ทำงานได้ง่ายและถูกต้องยิ่งขึ้น
                </p>
                <div className="cfcdtlt">
                  <div className="cfcdtl">
                    <div className="cfcdtltdi dtlti">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                      </svg>
                    </div>
                    <span> ลดการใช้กระดาษ </span>
                  </div>
                  <div className="cfcdtl">
                    <div className="cfcdtltdi dtlti">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                      </svg>
                    </div>
                    <span> ประยุกต์ใช้เทคโนโลยีสำหรับการเรียนรู้ </span>
                  </div>
                  <div className="cfcdtl">
                    <div className="cfcdtltdi dtlti">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                      </svg>
                    </div>
                    <span> วีดีโอที่ออกแบบมาเพื่อให้เข้าใจได้ง่าย </span>
                  </div>
                  <div className="cfcdtl">
                    <div className="cfcdtltdi dtlti">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                      </svg>
                    </div>
                    <span>
                      {" "}
                      เรียนรู้ได้จากทุกๆที่ในโรงงาน เหมาะกับองค์กรรูปแบบใหม่{" "}
                    </span>
                  </div>
                  <div className="cfcdtl">
                    <div className="cfcdtltdi dtlti">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                      </svg>
                    </div>
                    <span> เพิ่มทักษะ อย่างไร้ขีดจำกัด </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
