import React from 'react';
import MenuImg from '../SiteImg/LargeMenu.png'

function Menu(props) {
    return (
        <div>
        <div class="flex justify-center">
        <img class="w-8/12 mt-12 mb-12" src={MenuImg} alt="Menu"/>
        </div>
        </div>
    );
}

export default Menu; 