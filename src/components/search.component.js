import React, { useState, useEffect, useRef } from "react";

const SearchBox = () => {
  const [isActive, setIsActive] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleSearch = (event) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <form action="" class="relative mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </div>
      </div>
      <div className="body flex justify-center items-center w-screen h-screen bg-blue-100">
        <div className="flex justify-center items-center rounded-lg bg-white relative">
          <div
            className={`search-icon bg-blue-500 hover:bg-blue-400 text-white px-4 py-4 rounded-lg relative z-10 shadow-md ${
              isActive ? "active" : ""
            }`}
            onClick={toggleSearch}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            className={`search-input rounded-r-lg text-2xl text-blue-500 outline-none focus:outline-none:focus ${
              isActive ? "active" : ""
            }`}
            type="search"
            autoComplete="off"
            spellCheck="false"
            aria-live="polite"
            placeholder="Files, Names..."
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
