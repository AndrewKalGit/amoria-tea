import React from 'react';
import MileStones from './MileStones';
import Statement from './Statement';
import ProductInfo from './ProductInfo'

function About(props) {
    return (
        <div>
            <MileStones></MileStones>
            <Statement></Statement>
            {/* <Reviews></Reviews> */}
            <ProductInfo></ProductInfo>
            {/* <FAQ></FAQ> */}
        </div>
    );
}

export default About;