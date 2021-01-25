import React, { useEffect } from "react";
import Presentation from "../Layers/Presentation";
import GlassBanner from "../Sections/Banner/GlassBanner/GlassBanner";
import '../../Styles/Pages/Home/Home.scss'
import LocomotiveScroll from "locomotive-scroll";
export default function Home() {
  
  

  return (
    <div id="Home">
      
      <GlassBanner />
      <Presentation />
      <div data-scroll data-scroll-speed={3}>
        yo
      </div>
            
    </div>
  );
}

