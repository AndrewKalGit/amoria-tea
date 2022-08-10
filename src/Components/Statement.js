import React from 'react';
import TeaMaking from '../SiteImg/man-making-tea.jpg'

function Statement(props) {

    return (
        <div class="flex">
        <div className='maven-text-statement'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni ipsa quaerat iste incidunt voluptatum doloremque, accusamus doloribus in eius repellendus ad sit atque id officia non laboriosam sequi voluptate!
        </div>
        <div className="man-making-tea-container">
            <img className='man-making-tea-img' src={TeaMaking} alt="man making tea"/>
        </div>
        </div>
    );
}

export default Statement;