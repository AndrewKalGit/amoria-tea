import React from 'react';

function Nav(props) {
    return (
        <header className="header">
  <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="hamburger-menu">
      <div class="md:flex md:items-center md:gap-12">
        <a class="block text-teal-300" href="/">
          <span class="sr-only">Home</span>
        </a>
      </div>

      <div class="hidden md:block">
        <nav aria-labelledby="header-navigation">
          <h2 class="sr-only" id="header-navigation">Header navigation</h2>
        <div class="nav-ul-container">
          <ul class="flex items-center gap-6 text-2xl">
            <li>
              <a class="transition hover:text-black/75" href="/">
                Menu
              </a>
            </li>

            <li>
              <a class="transition hover:text-black/75" href="/">
                About
              </a>
            </li>

            <li>
              <a class="transition hover:text-black/75" href="/">
                Blog
              </a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="block md:hidden">
          <button
            className='hamburger-icon'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    );
}

export default Nav;