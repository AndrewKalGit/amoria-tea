import React from 'react';
import TeaMaking from '../SiteImg/man-making-tea.jpg'
import TeaCompliation from '../SiteImg/Compliation2.jpg'

function Statement(props) {
// ToDo
// For this component make it responsive: Use below link for reference 
//https://redstrawteabar.com/story 

    return (
        <div>
        <div>
        <h1 className='poppins-bolded'>
        Our story
        </h1>
        </div>
        <div className="Intro-Container">
        <div className='poppins'>
<strong> We are Amoria Tea.. </strong> 
<br/>
an up and coming environmentally conscious and consumer health conscious bubble tea shop based in NJ. 
        </div>
        <div className="man-making-tea-container">
            <img className='man-making-tea-img' src={TeaMaking} alt="man making tea"/>
        </div>
        </div>
        </div>
    );
}

export default Statement;