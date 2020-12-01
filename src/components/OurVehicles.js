import React, { useRef, useEffect } from "react";
import "./OurVehicles.css";
import Tipper from "./tipper.jpg"
import fors from "./forsbronze.png"
import rha from "./rha.webp"
import tasc from "./tasc.webp"
import {TweenMax, Power3} from 'gsap'


export default function Ourvehicles() {
  let tipper = useRef(null);
  let vehInfo = useRef(null);
  let picRha = useRef(null);
  let picFors = useRef(null);
  let picTasc = useRef(null);

  useEffect(() => {
    TweenMax.from(
      tipper, 
      1,
      {
        opacity: 0,
        x: 200,
        ease: Power3.easeOut,
        delay: 1.0,
      }
    )
    TweenMax.from(
      vehInfo,
      1,
      {
        opacity: 0,
        x: -200,
        ease: Power3.easeOut,
        delay: 1.7,
      }
    )
    TweenMax.from(
      picRha,
      1,
      {
        opacity: 0,
        x: -200,
        ease: Power3.easeOut,
        delay: 2,
      }
    )
    TweenMax.from(
      picFors,
      1,
      {
        opacity: 0,
        x: -500,
        ease: Power3.easeOut,
        delay: 2.8,
      }
    )
    TweenMax.from(
      picTasc,
      1,
      {
        opacity: 0,
        x: -500,
        ease: Power3.easeOut,
        delay: 3.8,
      }
    )
  })

  return (
    <div>
      <img ref={el => { tipper = el }} className="photo" src={Tipper} alt="tipper in yard" />
      <div ref={el => { vehInfo = el }} className="text">
                 <h4>Our Vehicles</h4>
            <p>A & R Burnett run a modern, well maintained, clean fleet of high specification Scania and Volvo trucks in tandem with Feldbinder and Freuhauf trailers. All our trucks are meticulously maintained and specified to maximise payload whilst offering the highest levels of comfort for our drivers. High specification levels  and the latest safety features help to ensure road safety is our highest priority.
            Our bulk powder tanker fleet consists of Scania, Volvo and MAN tractor units coupled to 24 non tipping Feldbinder and Spitzer semi silo powder tanks. All tanks have on-board weighing equipment, on-board filtration systems, safety walkways and necessary pressure release equipment to operate at maximum 2bar pressure.
          Our bulk tipper fleet consists of high spec Scania tractor units with Freuhauf bulk trailers..Our tippers run mainly dry quarry products including sand & gravel however we are also TASCC registered for the haulage of animal feed and grain. All of our tipper trailers are fitted with load-liners, electric easy sheets, inclinometers and on-board weighing systems to guarantee full loads are carried at all times in the safest manner possible.</p>
      </div>
      <div className="logos">
      <img ref={el => { picRha = el }} className="rha" src={rha} alt="Road Haulage association logo" />
      <img ref={el => { picFors = el }} className="tasc" src={tasc} alt="membership logo for crop transport" />
      <img ref={el => { picTasc = el }} className="fors" src={fors} alt="Fleet operator recognition scheme" />
      </div>
      </div>
  );
}