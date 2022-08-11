import React from 'react';
import Rose from '../BubbleTeaImg/RoseGarden.jpg';
import Strawberry from '../BubbleTeaImg/Strawberry MatchaLatte 1.jpg';
import Strawberry2slush from '../BubbleTeaImg/Strawberry Slush 3.jpg'
import Ube from '../BubbleTeaImg/UbeLatte1.jpg';
import Item from '../menudata';
import { Link } from "react-router-dom";

function DecorationBanner(props) {
    
    return (
<div>
<a
  class="block overflow-hidden group"
  href="/products/basic-tee"
>
  <img
    class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]"
    src={Strawberry}
    alt="Basic Tee Product"
  />

  <div class="relative pt-4 bg-white">

  </div>
</a>

</div>

    );
}

export default DecorationBanner;