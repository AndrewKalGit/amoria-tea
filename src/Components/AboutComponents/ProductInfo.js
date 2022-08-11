import React from 'react';
import Comic from './Comic';
  
function ProductInfo(props) {
    return (
        <div class='flex'>
        <div className="about-container">
        <div className="poppins">
        <div>
        </div>
        <div class='flex flex-col sm:flex-row-reverse'>
        <div class="ml-1 text-sm sm:text-xl md:text-2xl lg:text-4xl lg:mt-4">
        <br/>
        <strong className='poppins-bolded-responsive'> No. Powders. Ever </strong> 
        <br/>
        <p>
        We worked hard to create premium tea blends that pair perfectly with freshly made fruit purees and quality milks.
        </p>
        </div>
        <div className="man-making-tea-container">
         <Comic></Comic>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ProductInfo;

// export default ProductInfo;Header text : No. Powders. Ever
// We worked hard to create premium tea blends that pair perfectly with freshly made fruit purees and quality milks.