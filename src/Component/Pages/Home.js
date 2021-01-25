import React, { useEffect } from "react";
import Presentation from "../Layers/Presentation";
import GlassBanner from "../Sections/Banner/GlassBanner/GlassBanner";
import '../../Styles/Pages/Home/Home.scss'
import LocomotiveScroll from "locomotive-scroll";
export default function Home() {
  
  useEffect(()=> {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#Home'),
      smooth: true
    });
  })

  return (
    <div id="Home">
      
      <GlassBanner />
      <Presentation />
            
    </div>
  );
}

