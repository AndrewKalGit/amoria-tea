import { React, useState, useEffect } from 'react';
import TeaMaking from '../SiteImg/man-making-tea.jpg'

function Statement(props) {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {   
        const intervalID = setTimeout(() => {
            setToggle((toggle) => !toggle) //Notes: Give setToggle an updater function instead of simple values.
        }, 5000);

        return () =>clearInterval(intervalID); //Notes: Clean up function: Clears the interval on component dismount. Prevents bugs as you try to update the component after dismount from DOM.
    }, []); //Notes: Dependency array = empty; ensuring execution of useEffect only on initial mounting of the component 

    //Attribution: https://stackoverflow.com/questions/65504562/change-text-every-3-seconds-react-useeffect

    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni ipsa quaerat iste incidunt voluptatum doloremque, accusamus doloribus in eius repellendus ad sit atque id officia non laboriosam sequi voluptate!"

    return (
        <div class="flex ">
        <div className='maven-text-statement'>
            {text}
        </div>
        <div className="man-making-tea-container">
            <img className='man-making-tea-img' src={TeaMaking} alt="man making tea"/>
        </div>
        </div>
    );
}

export default Statement;