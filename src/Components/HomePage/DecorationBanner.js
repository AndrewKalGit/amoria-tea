import React from 'react';
import Strawberry from '../Categories/BubbleTeaImg/Strawberry MatchaLatte 1.jpg';

function DecorationBanner(props) {
    
    return (
<div>
<div
  class="block overflow-hidden group"
  href="/products/basic-tee"
>
  <img
    class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[400px] sm:h-[700px]"
    src={Strawberry}
    alt="Basic Tee Product"
  />
</div>

</div>

    );
}

export default DecorationBanner;