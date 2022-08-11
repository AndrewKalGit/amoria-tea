import React from 'react';
import MenuImg from '../SiteImg/LargeMenu.png'

function Menu(props) {
    return (
        <div>
        <div class="flex justify-center">
        <img class="w-screen h-full sm:w-full sm:h-full md:w-10/12 md:h-10/12 lg:w-8/12 lg:h-8/12 mt-12 mb-12 " src={MenuImg} alt="Menu"/>
        </div>
        </div>
    );
}

export default Menu; 