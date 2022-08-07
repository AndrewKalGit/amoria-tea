import React from 'react';
import Rose from './BubbleTeaImg/RoseGarden.jpg'
import Strawberry from './BubbleTeaImg/Strawberry MatchaLatte 1.jpg'
import Strawberry2slush from './BubbleTeaImg/Strawberry Slush 3.jpg'
import Ube from './BubbleTeaImg/UbeLatte1.jpg'

function ItemMenus(props) {
    return (
<div class="ml-12 md:ml-20 lg:ml-24 xl:ml-32 2xl:ml-52 min-w-full max-h-fit">
<section>
  <div class="px-4 py-8 w-3/4">
    <div>
    <div className='neutral-block'>
    <div class="flex space-x-8">
        {/* Wrap these links for Routers and change */}
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
        Signature
      </h2>
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
        Teas
      </h2>
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
        Milk
      </h2>
        <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs ">
        Others
      </h2>
    </div>
    </div>
    </div>

    <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
      <a href="" class="block">
        <div class="flex justify-center">
          <strong class="relative h-6 px-4 text-xs leading-6 text-white mb-2"> <span class='bg-blue-400 pl-1 pr-1'>COLD</span> <span class='bg-red-400 pl-1 pr-1'>HOT</span></strong>
        </div>
        <img
          alt="Product"
          src={Rose}
          class="object-contain w-full -mt-3 rounded-xl opacity-95 hover:opacity-100"
        />

        <h5 className="maven">
          Rose Garden
        </h5>

        <div class="flex items-center justify-between mt-4 font-bold">
          <p class="text-lg">
            $5.50
          </p>
        </div>
      </a>

      <a href="" class="block">
        <div class="flex justify-center">
          <strong class="relative h-6 px-4 text-xs leading-6 text-white mb-2"> <span class='bg-blue-400 pl-1 pr-1'>COLD</span> <span class='bg-red-400 pl-1 pr-1'>HOT</span></strong>
        </div>
      
        <img
          alt="Product"
          src={Strawberry}
          class="object-contain w-full -mt-3 rounded-xl opacity-95 hover:opacity-100"
        />

        <h5 className="maven">
          Strawberry Matcha
        </h5>

        <div class="flex items-center justify-between mt-4 font-bold">
          <p class="text-lg">
            $5.50
          </p>
        </div>
      </a>

      <a href="" class="block">
      <div class="flex justify-center">
          <strong class="relative h-6 px-4 text-xs leading-6 text-white mb-2"><span class='bg-blue-400 pl-1 pr-1'>COLD</span></strong>
        </div>

        <img
          alt="Product"
          src={Strawberry2slush}
          class="object-contain w-full -mt-3 rounded-xl opacity-95 hover:opacity-100"
        />

       <h5 className="maven">
            Strawberry Slush
        </h5>

        <div class="flex items-center justify-between mt-4 font-bold">
          <p class="text-lg">
            $5.50
          </p>

        </div>
      </a>

      <a href="" class="block">
        <div class="flex justify-center">
          <strong class="relative h-6 px-4 text-xs leading-6 text-white mb-2"> <span class='bg-red-400 pl-1 pr-1'>HOT</span></strong>
        </div>

        <img
          alt="Product"
          src={Ube}
          class="object-contain w-full -mt-3 rounded-xl opacity-95 hover:opacity-100"
        />

        <h5 className="maven">
          Ube Latte
        </h5>

        <div class="flex items-center justify-between mt-4 font-bold">
          <p class="text-lg">
            $5.50
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

        </div>
    );
}

export default ItemMenus;