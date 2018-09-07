import React from "react";
import "./Hero.css";

const Hero = () => (
<div>
    <section className="hero is-fullheight hero-body-image">
        <div className="hero-body home-search-body">
            <div className="container has-text-centered">
            <div className="columns">
            <div className="column"></div>
            <div className="column is-8">
                <h1 className="title is-4 primary-span-home">hi, i'm <span id="name" style={{fontWeight:700}}>kathleen</span> <br>
                </br>
                <span id="subtitle">i like to design and build apps</span></h1>
                <p></p>
                <a class="button is-rounded" href="#nav">View my Work</a>
            </div>
            <div className="column"></div>
            </div>
            </div>
        </div>
    </section>
</div>
        
)

export default Hero;