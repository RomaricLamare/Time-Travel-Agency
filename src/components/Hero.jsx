import React from 'react';
import { NavLink } from "react-router-dom";
function Hero() {

    return (
        <>
            <div className="hero">
                <h1 className="hero_title">
                    Découvrez une nouvelle
                    <br></br>façon de
                    <span className="hero_title_span" > voyager.</span>
                </h1>
            </div>
            <div className="about-us">
                <h1 className="about-us_text">
                    <NavLink to="/time-machine" className="link-about-us">Découvrez la technologie de pointe qui rend possible votre voyage.</NavLink>
                </h1>
            </div>
        </>
    );
}

export default Hero