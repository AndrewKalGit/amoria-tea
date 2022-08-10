import { React, useState, useEffect } from 'react';

function StatementHeading(props) {
    const headingStatement = ['Natural', 'Fresh', 'Modern', 'Comfortable', 'Quality', 'Yum.'];

    const [index, setIndex] = useState(0)

    useEffect(() => {   
        const intervalID = setInterval(() => {
            if (index < headingStatement.length - 1){
                setIndex(index + 1)
            } 
            if (index === headingStatement.length - 1){
                setIndex(index - headingStatement.length + 1)
            }
        }, 7500);
        return () => clearInterval(intervalID);//Notes: Clean up function: Clears the interval on component dismount. Prevents bugs as you try to update the component after dismount from DOM.
    },); //Notes: Dependency array = empty; ensuring execution of useEffect only on initial mounting of the component 

    //Attribution: https://stackoverflow.com/questions/65504562/change-text-every-3-seconds-react-useeffect

    return (
        <div class="flex justify-center">
            <h1 className='maven-statement-heading'>{headingStatement[index]}</h1> 
        </div>
    );
}

export default StatementHeading;