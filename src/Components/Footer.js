import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './SiteImg/Amoria-Tea-Cup-Logos-Vertical.svg';

function Footer(props) {
    return (
      <footer class="bg-gray-100">
  <div
    class="relative max-w-screen px-4 py-2 mx-auto sm:px-6 lg:px-8 lg:pt-8"
  >
    <nav class="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
        <h2 class="sr-only" id="footer-navigation">Footer navigation</h2>

        <ul
          class="flex flex-wrap justify-center gap-4 lg:justify-center md:gap-8 lg:gap-12"
        >
          <li>
            <Link to="/" class="text-gray-700 transition hover:text-gray-700/75">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" class="text-gray-700 transition hover:text-gray-700/75">
              About
            </Link>
          </li>
          <li>
            <Link to="/Menu" class="text-gray-700 transition hover:text-gray-700/75" href="/">
              Menu
            </Link>
          </li>

        </ul>
      </nav>
  
      <div class="flex sm:flex-row flex-col justify-between mt-12">
      <div class="flex text-xs sm:text-sm  text-center text-gray-400 lg:text-left">
      <img class="h-12 mb-4" src={Logo} alt="Logo"/> 
      See you soon!
      </div>
      <p class="text-xs sm:text-sm  text-center text-gray-400 lg:text-center">
       Copyright &copy; 2022
      </p>
      <div class="text-xs sm:text-sm text-center text-gray-400 sm:text-right"> mike.amoria@gmail.com
      </div>
    </div>
    </div>
</footer>

    );
}

export default Footer;