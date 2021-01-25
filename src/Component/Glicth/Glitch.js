import React, { useEffect } from "react";
import "../../Styles/Glicth.scss";

export default function Glicth() {
  const Glitch = "iconicdev";

 

  function Multiply() {
    const Arr = [];
    for (let i = 0; i <= 3; i++) {
      Arr.push(Glitch);
    }
    return Arr.map((Glitch, i) => {
      return (
        <p className="glitch_text" key={i} >
          {Glitch}
        </p>
      );
    });
  }


  return <div id="glicth">{Multiply()}</div>;
}


