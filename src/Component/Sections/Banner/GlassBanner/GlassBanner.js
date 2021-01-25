import React, { useEffect } from "react";
import "../../../../Styles/Sections/Banner/GlassBanner/GlassBanner.scss";
import CurvedTextBtn from "../../../Buttons/CurvedTextBtn/CurvedTextBtn";
import Picture from "../../../../Asstes/GlassBanner/img/picture.svg";
import Chart from "../../../../Asstes/GlassBanner/img/chart.svg";
import Man from "../../../../Asstes/GlassBanner/img/man.svg";
import Contact from "../../../../Asstes/GlassBanner/img/contact.svg";
import Map from "../../../../Asstes/GlassBanner/img/map.svg";

export default function GlassBanner() {
  const Title = "Developper vos projets web n'a jamais été aussi simple.";

  return (
    <section  id="glassbanner_container">
      <div   id="glassbanner_text_container">
        <div id="glassbanner_text">
          <h1>{Title}</h1>
          <CurvedTextBtn />
        </div>
      </div>
      <div id="glassbanner_slide_container">
        <div id="glassbanner_slide">
          <div className="Items">
            <div className="zone1">
              <img src={Picture} alt="image" />
              <span className="lines1"></span>
              <span className="lines"></span>
              <span className="lines"></span>
              <span className="lines"></span>
            </div>
            <div className="zone2">
              <span>
                <div className="lines1"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </span>
              <span>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </span>
            </div>
          </div>
          <div className="Items">
            <div className="zone3">
              <img src={Chart} alt="graphiques" />
              <span>
                <div className="lines1"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </span>
            </div>
          </div>
          <div className="Items">
            <div className="zone4">
              <span>
                <img src={Man} alt="graphiques" />
                <div className="lines1"></div>
                <div className="lines"></div>
              </span>
              <span>
                <img src={Man} alt="graphiques" />
                <div className="lines1"></div>
                <div className="lines"></div>
              </span>
              <span>
                <img src={Man} alt="graphiques" />
                <div className="lines1"></div>
                <div className="lines"></div>
              </span>
            </div>
          </div>
          <div className="Items">
            <div className="zone5">
              <img src={Contact} alt="graphiques" />
              <span>
                <div className="lines1"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </span>
            </div>
            <div className="zone5">
              <span>
                <div className="lines1"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
              </span>
              <img src={Map} alt="graphiques" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
