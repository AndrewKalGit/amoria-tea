import React from 'react';
import TeaMaking from '../SiteImg/man-making-tea.jpg'
import TeaCompliation from '../SiteImg/Compliation2.jpg'

function Statement(props) {

    return (
        <>
        <div class="flex justify-center">
        <h1 className='maven-statement-heading2'>
            Our Values Our Teas Our Mission
        </h1>
        </div>
        <div class="flex">
        <div className='maven-text-statement'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quasi magni ipsa quaerat iste incidunt voluptatum doloremque. Accusamus doloribus in eius repellendus ad sit atque id officia non laboriosam sequi voluptate!
        </div>
        <div className="man-making-tea-container">
            <img className='man-making-tea-img' src={TeaMaking} alt="man making tea"/>
        </div>
        </div>
{/*     <div class="flex ml-2">
          <div className='maven-text-statement'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni ipsa quaerat iste incidunt voluptatum doloremque, accusamus doloribus in eius repellendus ad sit atque id officia non laboriosam sequi voluptate!
        </div>
         <div className="teas-img-container">
            <img className='teas-img' src={TeaCompliation} alt="teas"/>
        </div>
        </div> */}
        </>
    );
}

export default Statement;