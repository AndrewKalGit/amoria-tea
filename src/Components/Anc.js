import { React, useState, useEffect } from 'react';

function Anc(props) {
const [ closed, setClosed ] = useState("");

useEffect(() => {
    setClosed(closed => '');
  },[]);

const closeOut = () => {
  setClosed(closed => "hide");  
};

return (
<div className={closed} class="fixed w-full px-4 py-3 text-white bg-indigo-600 pr-14 opacity-90">
  <p class="text-xs sm:text-sm font-medium text-left sm:text-center">
    Find us next at Hopatcong Marketplace 8/20 - 8/21
    <a class="underline text-xs sm:text-sm" href="https://www.facebook.com/VendorsoftheHopatcongMarketPlace/" target="_blank" rel="noreferrer"> Learn More &rarr; </a>
  </p>

  <button onClick={closeOut} 
    aria-label="Close"
    class="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</div>

    );
}

export default Anc;