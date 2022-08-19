import React from "react";

function UserHeader(props) {
  return (
    <>
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
          integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  html,\nbody {\n  font-family: "Rubik", sans-serif;\n}\n\n/* navigation \n - show navigation always on the large screen devices with (min-width:1024)\n*/\n\n@media (min-width: 1024px) {\n  .top-navbar {\n    display: inline-flex !important;\n  }\n}\n\n',
          }}
        />
        <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
          <a href="/home" className="p-2 mr-4 inline-flex items-center">
            <svg
              viewBox="0 0 50 50 "
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white h-8 w-8 mr-2"
            >
              <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 20 11 C 15.054545 11 11 15.054545 11 20 L 11 25 L 11 30 C 11 34.945455 15.054545 39 20 39 L 30 39 C 34.945455 39 39 34.945455 39 30 L 39 24 C 39 22.35503 37.64497 21 36 21 L 35 21 C 34.43497 21 34 20.56503 34 20 C 34 15.054545 29.945455 11 25 11 L 20 11 z M 20 13 L 25 13 C 28.854545 13 32 16.145455 32 20 C 32 21.64497 33.35503 23 35 23 L 36 23 C 36.56503 23 37 23.43497 37 24 L 37 30 C 37 33.854545 33.854545 37 30 37 L 20 37 C 16.145455 37 13 33.854545 13 30 L 13 25 L 13 20 C 13 16.145455 16.145455 13 20 13 z M 20 17 C 18.354545 17 17 18.354545 17 20 C 17 21.645455 18.354545 23 20 23 L 25 23 C 26.645455 23 28 21.645455 28 20 C 28 18.354545 26.645455 17 25 17 L 20 17 z M 20 19 L 25 19 C 25.554545 19 26 19.445455 26 20 C 26 20.554545 25.554545 21 25 21 L 20 21 C 19.445455 21 19 20.554545 19 20 C 19 19.445455 19.445455 19 20 19 z M 20 27 C 18.354545 27 17 28.354545 17 30 C 17 31.645455 18.354545 33 20 33 L 30 33 C 31.645455 33 33 31.645455 33 30 C 33 28.354545 31.645455 27 30 27 L 20 27 z M 20 29 L 30 29 C 30.554545 29 31 29.445455 31 30 C 31 30.554545 30.554545 31 30 31 L 20 31 C 19.445455 31 19 30.554545 19 30 C 19 29.445455 19.445455 29 20 29 z" />
            </svg>
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Blog
            </span>
          </a>
          <button
            className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
            data-target="#navigation"
          >
            <i className="material-icons">menu</i>
          </button>
          <div
            className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <a
                href="/home"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Home</span>
              </a>
              <a
                href="/home/profile"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Profile</span>
              </a>
              <a
                href="/home/addblog"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Add Blog</span>
              </a>
              <a
                href="/logout"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Logout</span>
              </a>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}

export default UserHeader;
