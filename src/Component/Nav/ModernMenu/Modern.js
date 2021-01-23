import React, { useEffect, useState } from "react";
import "../../../Styles/Nav/ModernMenu/Modern.scss";

export default function Modern() {
    const [cross, setCross] = useState(false)
    const [menuHover, setMenuHover] = useState(false)
  const HamberEvents = () => {
    setCross(!cross)
  };
//   useEffect(() => {
//       //Hamberger Selector
//         const Hm = document.getElementById('hm')
//         const Top = document.getElementById("top");
//         const Mid = document.getElementById("mid");
//         const Bot = document.getElementById("bot");
//         const Spans = Hm.querySelectorAll("span")
//             //Animations
//             if (cross === true) {
//             } else {
//             }
//   })

function Menu () {
    //Menu Selector
    const Left = document.getElementById('left')
    const Right = document.getElementById('right')
    if (cross === true) {
        Left.style.transform = "translateY(0)"
        Left.style.opacity = "1"
        Right.style.transform = "translateX(0)"
        Right.style.opacity = "1"
    } else {
        Left.style.transform = "translateY(-100%)"
        Left.style.opacity = "0"
        Right.style.transform = "translateX(120%)"
        Right.style.opacity = "0"
        

    }
}
useEffect(() => {
    Menu()
})
  return (
    <div id="Modern_container">
      <div id="hm" onClick={HamberEvents}>
        <span id="top"></span>
        <span id="mid"></span>
        <span id="bot"></span>
      </div>
      <div id="left">

      </div>
      <div id="right">

      </div>
    </div>
  );
}
