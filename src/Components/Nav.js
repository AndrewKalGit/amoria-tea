import React from 'react';
import { Link } from 'react-router-dom';

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

      <div class="md:block">
        <nav aria-labelledby="header-navigation">
          <h2 class="sr-only" id="header-navigation">Header navigation</h2>
        <div class="nav-ul-container">
          <ul class="flex items-center gap-5 text-2xl">
            <li>
              <Link to="/" class="transition hover:text-black/75">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/about" class="transition hover:text-black/75">
                About
              </Link>
            </li>
          </ul>
        </div>
        </nav>
      </div>
      
      {/* <div class="flex items-center gap-4">
        <div class="block md:hidden">
          <button
            className="hamburger-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger-icon"
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
      </div> */}
    </div>
  </div>
</header>
    );
}

export default Nav;