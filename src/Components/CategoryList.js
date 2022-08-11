// import React from 'react';
// import { Link } from 'react-router-dom';

// const CategoryList = ({ categories, filterItems, activeCategory }) => {
//     return (
//         <div>
//     <div className="btn-container">
//       {categories.map((category, index) => {
//         return (
//           <button
//             type="button"
//             className={`${
//               activeCategory === category ? "filter-btn active" : "filter-btn"
//             }`}
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//             <div className="MenuBar">
//     <div class="flex justify-start">
//     <div className='neutral-block'>
//     <div class="flex space-x-8">
//         <Link to="/">
//         <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
//         Signature
//         </h2>
//         </Link>
//         <Link to="./Categories/Brewed">
//         <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
//         Brewed
//       </h2>
//        </Link>
//        <Link to="./Categories/Milk">
//         <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs opacity-80 hover:opacity-100">
//         Milk 
//       </h2>
//       </Link>
//       <Link to="./Categories/Others">
//         <h2 class="mt-1 font-extrabold tracking-wide uppercase lg:text-xl md:text-lg sm:text-md text-xs ">
//         Others
//       </h2>
//       </Link>
//     </div>
//     </div>
//     </div>  
//         </div>
//         </div>
//     );
// }

// export default CategoryList;