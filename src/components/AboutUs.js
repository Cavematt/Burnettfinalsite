import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import volvomotion from "./volvomotion.jpg"
import {TweenMax, Power3} from 'gsap'

export default function AboutUs() {
  let about = useRef(null);
  let photo = useRef(null);
  let drivers = useRef(null);

  useEffect(() => {
    TweenMax.from(
      about, 
      1,
      {
        opacity: 0,
        x: -200,
        ease: Power3.easeOut,
        delay: 0.7,
      }
    )
    TweenMax.from(
      photo,
      1,
      {
        opacity: 0,
        x: 200,
        ease: Power3.easeOut,
        delay: 1.2,
      }
    )
    TweenMax.from(
      drivers,
      1,
      {
        opacity: 0,
        x: 200,
        ease: Power3.easeOut,
        delay: 1.8,
      }
    )
  })
  return (
      <div>
      <img ref={el => { photo = el }} className="photo" alt="Burnett volvo driving" src={volvomotion} />
          <div className="firstPart" ref={el => {about = el}}>
            <h3>About Us</h3>
            <p>Based near Stirling in Central Scotland, A & R Burnett are a long
              established forward thinking bulk haulage company specialising in bulk
              powder and bulk tipper transport. We have been established since 1976 as
              an owner driver with a single concrete mixer, and due to market &
              customer demands have expanded to a fleet of 30 vehicles with 5
              strategically placed operating centres offering a nationwide service. A
              & R Burnett run a high profile modern fleet of trucks, operated by
              dedicated, highly trained and experienced drivers with safety being our
              priority. All of our trucks have all round cameras as well as audio left
              turn warnings fitted. We transport the complete range of bulk powder
              products, quarry products as well as animal feeding and grain in our
              fleet or both TASCC and non-TASCC assured articulated vehicles. We take
              pride in understanding our customers requirements to ensure maximum
        efficiency at all times.</p>
          </div>
          <div ref={el => { drivers = el }}className="secondText">
          <h3>Our Drivers</h3>
        <p>Without our dedicated, hard working team of drivers we wouldn’t be able
              to offer the high levels of customer service that we pride ourselves on,
              they are the back-bone of our business. We have a low driver turnover
              with many employees having 10-20 years plus service. All new drivers
              receive a two week induction and training programme with our driver
              trainer, Andy Rae whilst undergoing and ongoing DCPC programme to assist
              with all areas of our operation. All drivers are MPQC (EPIC and VRU),
              SAFED (Safe and Fuel Efficient Driving) and DFA (Driver First Assist) as
              part of their ongoing DCPC programme. We have TASCC assurance for our
              vehicles, as well as Fleet Operator recognition scheme membership and
        Road Haulage associaition membership</p>
              </div>
    </div>
  );
}