import React from "react";
import "./Nav.css";

const Nav = () => (

<nav className="navbar" id="nav" role="navigation" aria-label="main navigation">
    <div class="container">
        <div className="navbar-brand">
            <a href="/" className="navbar-item">
                <strong>
                    <span id="homeBtn">HOME</span>
                </strong>
            </a>
        </div>
        <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
                <a href="#nav" className="navbar-item">
                    <span>ABOUT ME</span>
                </a>
                <a href="#portfolio" className="navbar-item">
                    <span>PORTFOLIO</span>
                </a>
                <a href="#contact" className="navbar-item">
                    <span>CONTACT</span>
                </a>
            </div>
        </div>
    </div>
</nav>
       
)

export default Nav;