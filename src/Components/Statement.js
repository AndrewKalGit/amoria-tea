import React from 'react';
import TeaMaking from '../SiteImg/man-making-tea.jpg'


function Statement(props) {
    return (
        <div class="flex ">
        <div className='maven-text-statement'>
            *This text will change and update by itself in the final version* <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita culpa placeat in omnis consectetur praesentium consequatur rem dicta, id delectus quia reiciendis laudantium laborum? Quia odio doloremque fugit in.
        </div>
        <div className="man-making-tea-container">
            <img className='man-making-tea-img' src={TeaMaking} alt="man making tea"/>
        </div>
        </div>
    );
}

export default Statement;