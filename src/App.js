
import './App.css';
import WavyText from './Component/WavyText/WavyText';
import OpenYourEyes from './Component/OpenYourEyes/OpenYourEyes';
import Glicth from './Component/Glicth/Glitch';
import Underline from './Component/Underline/Underline';
import NeonBtn from './Component/Buttons/Neon/NeonBtn';
import CurvedTextBtn from './Component/Buttons/CurvedTextBtn/CurvedTextBtn';
import JumpBtn from './Component/Buttons/JumpBtn/JumpBtn';
import Modern from './Component/Nav/ModernMenu/Modern';
import NeonCards from './Component/PriceCard/Neon/NeonCards';
import GlassBanner from './Component/Sections/Banner/GlassBanner/GlassBanner';
import Presentation from './Component/Layers/Presentation';
import Home from './Component/Pages/Home';
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from 'react';

function App() {
  
  useEffect(()=> {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.App'),
      smooth: true
    });
  })

  return (
    <div className="App" >
      <div data-scroll data-scroll-speed="-2">
        Salut
      </div>
      <Home/>
    </div>
  );
}

export default App;
