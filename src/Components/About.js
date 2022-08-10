import React from 'react';
import FAQ from './AboutComponents/FAQ'
import MileStones from './AboutComponents/MileStones';
import Reviews from './AboutComponents/Reviews';

function About(props) {
    return (
        <div>
            <MileStones></MileStones>
            {/* <Reviews></Reviews> */}
            <FAQ></FAQ>
        </div>
    );
}

export default About;