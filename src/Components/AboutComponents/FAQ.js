import React from 'react';

function FAQ(props) {
    return (
<div className='FAQ-componet'>
  <div class="space-y-4">
  <details class="group" open>
    <summary
      class="flex items-center justify-between p-4 rounded-lg cursor-pointer"
    >
      <h5 class="FAQ-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h5>

      <svg
        class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="px-4 mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>

  <details class="group">
    <summary
      class="flex items-center justify-between p-4 rounded-lg cursor-pointer"
    >
      <h5 class="font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h5>

      <svg
        class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>

    <p class="px-4 mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
      molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
      voluptate dicta quo officiis explicabo consequuntur distinctio corporis
      earum similique!
    </p>
  </details>
</div>
        </div>
    );
}

export default FAQ;