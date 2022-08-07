import React from 'react';
import Amoria from './Amoria.png';

function Nav(props) {
    return (
<header class="shadow-sm">
{/* Mobile Nav */}
  <div
    class="flex items-center justify-between h-16 px-4 mx-auto"
  >
    <img class="max-h-16" src={Amoria} alt="logo" />
    <div class="flex items-center space-x-4">
         <input
            class="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10 ml-2 flex sm:hidden"
            placeholder="Search..."
            type="text"
          />

      <form class="hidden md:flex mb-0 lg:flex">
        <div class="relative">
          <input
            class="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
            placeholder="Search..."
            type="text"
          />

          <button
            class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
            type="submit"
          >
            <svg
              class="w-5 h-5 md:hidden lg:flex"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
        
    <div class="flex justify-end flex-1 w-0 lg:hidden">
      <button class="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>

    <nav
      class="items-center justify-end hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0 mr-2"
    >
      <a class="text-gray-900" href="">About</a>
      <a class="text-gray-900" href="">Menu</a>
      <a class="text-gray-900" href="">Contact</a>
    </nav>
  </div>
  <div class='flex justify-center'>
    <h1>
        Amoria Tea
    </h1>
  </div>
{/* DeskTop Nav */}
  <div class="border-t border-gray-100 lg:hidden">
    <nav
      class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
    >
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">About</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">Menu</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="">Contact</a>
    </nav>
  </div>
</header>

    );
}

export default Nav;