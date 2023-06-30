import React from "react";

const Filter = () => {
  return (
    <>
      <div>
        <div className="navbar bg-[#f9f9f9]">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl"></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="Edit / List_Remove">
                        {" "}
                        <path
                          id="Vector"
                          d="M3 17H10M15 16H21M3 12H14M3 7H14"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span>Layout</span>
                </a>
              </li>
              <li>
                <details>
                  <summary className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                          d="M6.5 19.7499C6.31 19.7499 6.12 19.6799 5.97 19.5299L3.47 17.0299C3.18 16.7399 3.18 16.2599 3.47 15.9699C3.76 15.6799 4.24 15.6799 4.53 15.9699L6.5 17.9399L8.47 15.9699C8.76 15.6799 9.24 15.6799 9.53 15.9699C9.82 16.2599 9.82 16.7399 9.53 17.0299L7.03 19.5299C6.88 19.6799 6.69 19.7499 6.5 19.7499Z"
                          fill="#000000"
                        />{" "}
                        <path
                          d="M6.5 19.75C6.09 19.75 5.75 19.41 5.75 19V5C5.75 4.59 6.09 4.25 6.5 4.25C6.91 4.25 7.25 4.59 7.25 5V19C7.25 19.41 6.91 19.75 6.5 19.75Z"
                          fill="#000000"
                        />{" "}
                        <path
                          d="M20 17.25H12C11.59 17.25 11.25 16.91 11.25 16.5C11.25 16.09 11.59 15.75 12 15.75H20C20.41 15.75 20.75 16.09 20.75 16.5C20.75 16.91 20.41 17.25 20 17.25Z"
                          fill="#000000"
                        />{" "}
                        <path
                          d="M16 11.25H12C11.59 11.25 11.25 10.91 11.25 10.5C11.25 10.09 11.59 9.75 12 9.75H16C16.41 9.75 16.75 10.09 16.75 10.5C16.75 10.91 16.41 11.25 16 11.25Z"
                          fill="#000000"
                        />{" "}
                        <path
                          d="M14 8.25H12C11.59 8.25 11.25 7.91 11.25 7.5C11.25 7.09 11.59 6.75 12 6.75H14C14.41 6.75 14.75 7.09 14.75 7.5C14.75 7.91 14.41 8.25 14 8.25Z"
                          fill="#000000"
                        />{" "}
                        <path
                          d="M18 14.25H12C11.59 14.25 11.25 13.91 11.25 13.5C11.25 13.09 11.59 12.75 12 12.75H18C18.41 12.75 18.75 13.09 18.75 13.5C18.75 13.91 18.41 14.25 18 14.25Z"
                          fill="#000000"
                        />{" "}
                      </g>
                    </svg>
                    <span>Sorting</span>
                  </summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <a className="text-md">Link 1</a>
                    </li>
                    <li>
                      <a className="text-md">Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
