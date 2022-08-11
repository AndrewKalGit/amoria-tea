import React from 'react';
import FAQ from './FAQ'
import MileStones from './MileStones';
import Statement from './Statement';
import Reviews from './Reviews';
import ProductInfo from './ProductInfo'

function About(props) {
    return (
        <div>
            <MileStones></MileStones>
            <Statement></Statement>
            {/* <Reviews></Reviews> */}
            <ProductInfo></ProductInfo>
            <FAQ></FAQ>
        </div>
    );
}

export default About;