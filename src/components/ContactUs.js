import React, { useRef, useEffect } from "react";
import volvo from "./volvo.jpg"
import {TweenMax, Power3} from 'gsap'

function ContactUs(props) {
    let photo = useRef(null);
    let title = useRef(null);
    let greg = useRef(null);
    let karen = useRef(null);
    let address = useRef(null);

    useEffect(() => {
        TweenMax.from(
        photo, 
        1,
        {
            opacity: 0,
            y: -200,
            ease: Power3.easeOut,
            delay: 1.9,
        }
        )
        TweenMax.from(
        title, 
        1,
        {
            opacity: 0,
            x: 200,
            ease: Power3.easeOut,
            delay: 2.5,
        }
        )
        TweenMax.from(
        greg, 
        1,
        {
            opacity: 0,
            x: -200,
            ease: Power3.easeOut,
            delay: 2.5,
        }
        )
        TweenMax.from(
        karen, 
        1,
        {
            opacity: 0,
            y: 200,
            ease: Power3.easeOut,
            delay: 2.5,
        }
        )
        TweenMax.from(
        address, 
        1,
        {
            opacity: 0,
            x: 200,
            ease: Power3.easeOut,
            delay: 3,
        }
        )
    })

    const Title = {
        color: 'blue',
        textAlign: 'center',
        paddingTop: '30px',
        paddingBottom: '15px',
    }
    const MainText = { 
        display: "flex",
        color: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
    }
    const ActualBox = {
        width: '400px',
        margin: '10px',
        textAlign: 'center',
    }
    const MainPhoto = {
        display: 'block',
        width: '50%',
        paddingTop: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    return (
        <div>
            <img ref={el => { photo = el }} src={volvo} alt="Volvo in yard" style={MainPhoto} />
            <h2 ref={el => { title = el }} style={Title}>Contact us:<br /></h2>
            <div style={MainText}>
            <div ref={el => { greg = el }} style={ActualBox}>
            <p>Greg Burnett</p>
            <p>T: 0141 343 9199<br /> M: 07920 786780<br /> E: greg@arburnett.com</p>
            </div>
            <div ref={el => { karen = el }} style={ActualBox}>
            <p>Karen Burnett (Accounts & Operations)</p>
            <p>T: 0141 343 9190<br /> M: 07824 390861<br /> E: karen@arburnett.com</p>
            </div>
            <div ref={el => { address = el }} style={ActualBox}>
            <p>The Smithy,<br /> Blairdrummond,<br /> Stirling,<br /> FK9 4UY</p>
            </div>
            </div>
        </div>
    )
}

export default ContactUs;