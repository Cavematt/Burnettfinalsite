import React, { useRef, useEffect } from 'react';
import ARBlogo from './ARBlogo.JPG'
import { TweenMax, Power3 } from 'gsap'
import {Link} from 'react-router-dom'
import './FrontContent.css'

function FrontContent(props) {
    let logoItem = useRef(null);
    let textItem = useRef(null);
    let secondTitle = useRef(null);
    let aboutButton = useRef(null);
    

    useEffect(() => {
        console.log(logoItem)
        TweenMax.from(
            logoItem,
            1,
            {
                opacity: 0,
                x: 200,
                ease: Power3.easeOut,
            delay: 0.7,
        }
    )
    TweenMax.from(
        textItem,
        1,
        {
            opacity: 0,
            x: -200,
            ease: Power3.easeOut,
            delay:0.7
        }
    )
    TweenMax.from(
        aboutButton,
        1,
        {
            opacity: 0,
            x: -200,
            ease: Power3.easeOut,
            delay:2
        }
    )
    TweenMax.from(
        secondTitle,
        1,
        {
            opacity: 0,
            x: 200,
            ease: Power3.easeOut,
            delay:0.7
        }
    )
}, [])

const FrontPhoto = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: 100,
    paddingTop: 100,
}
const Title = {
    color: 'blue',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    overflow: 'hidden',
}




    return (
        <div>
            <div style={FrontPhoto}>
                <img
                ref={el => {logoItem = el}}
                    src={ARBlogo}
                alt="logo of business" /> 
            </div>
            <div>
                <h1 ref={el => {textItem = el}} style={Title}>A & R Burnett</h1>
                <h5 ref={el => {secondTitle = el}} style={Title}>A Family Run Business located in Central Scotland with Bulk powder tankers & Tippers</h5>
            </div>
            <div ref={el => {aboutButton = el}} className="ButtonWrap">
                <Link to='/AboutUs' className="MoreInfo">
                    About Us
                </Link>
            </div>
        </div>
    )
}

export default FrontContent;
