"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="shadow-md bg-[#fbc424] sticky top-0 z-30 h-16">
        <div className="max-w-[1150px] mx-auto my-0 relative xl:max-w-[1200px] lg:max-w-[1000px] ">
          <nav className="navbar bg-[#fbc424]">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/course.page">Course</Link>
                  </li>
                  <li>
                    <Link href="/watch.page">Watch</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <a className="btn btn-ghost normal-case text-xl text-[#3b4042]">
                900TRAINING
              </a>
            </div>
            <div className="navbar-end">
              <form action="" class="relative ml-auto w-max">
                <input
                  type="search"
                  className="peer cursor-pointer relative z-10 h-9 w-9 rounded-[10px]  bg-transparent pl-12  focus:w-full focus:cursor-text focus:border-[#000000] focus:bg-[f8f8f8]   focus:transition-all   focus:pl-16 focus:pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-[#000000] px-3.5 peer-focus:border-[#000000] peer-focus:stroke-[#000000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="#6b7280"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
