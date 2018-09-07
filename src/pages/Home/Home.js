import React from "react";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav";
import Title from "../../components/Title";
import Container from "../../components/Container";
import ProgressBar from "../../components/ProgressBar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import "./Home.css";

const Home = () => (
<div>
<Hero/>
<Nav/>
<Container fluid className="contain">
    <Title first="about" second="me"/>
    <div id="aboutMe">
        <p className="typl8-drop-cap">I am an aspiring Full-stack Web Developer with a primary focus on Front-End. I recently completed a Full-stack curriculum from the University of Minnesota Twin Cities partnered with Triology Education Services and realized it was really FUN and actually pretty AMAZING the things you could do. Using MERN stack I learned not only how to build a functional app, but also build beautiful interfaces with UI effects and animations. I am looking forward to finding opportunities that will help me grow as a Full-stack Web Developer.</p>
    </div>
    <div className="columns">
        <figure className="colum is-4by3 photo">
            <img src="mypic.png"/>
        </figure>
        <div className="column skills">
            <br/>
           <ProgressBar title="CSS" percentage="70"/>  
           <ProgressBar title="HTML" percentage="80"/> 
           <ProgressBar title="React" percentage="50"/>
           <ProgressBar title="JavaScript" percentage="70"/>
           <ProgressBar title="Node.js" percentage="40"/>
           <ProgressBar title="Photoshop" percentage="60"/>
        </div>
    </div>
</Container>

<Container fluid className="contain portfolio-section" id="portfolio">
<Title first="my" second="projects" />
<div class="columns is-multiline is-desktop">
    <div class="column is-one-third">   
        <Card screenshot="TunedUp.png" heading="TunedUp" field="Mongo/Express/React/Node" projectInfo="MERN Full Stack App designed for musicians seeking to connect with other musicians to expand their social and professional network." url="https://github.com/TunedUpBootcamp/TunedUp"/>
     </div>
    <div class="column is-one-third">
        <Card screenshot="ClickMe.png" heading="Click Me Game" field="Javascript/React" projectInfo="Designed a game using React, where the user must click once but not twice." url="https://github.com/kmvincent/ClickMeGame-ReactJS"/>
    </div>
    <div class="column is-one-third">
        <Card screenshot="petfinder.png" heading="Pet Cupid" field="Node.js/Handlebars/Sequalize" projectInfo="Co-created an application to pair perspective pet owners with pets up for adoption." url="https://github.com/kmvincent/PetCupidApp"/>
    </div>
    <div class="column is-one-third">
        <Card screenshot="burger.png" heading="Eat My Burger" field="MySQL/Handlebars/homemade ORM" projectInfo="Created a fun burger eating app where you can devour a hamburger and add your own burger." url="https://github.com/kmvincent/EatMyBurger-Fullstack"/>
    </div>
    <div class="column is-one-third">
        <Card screenshot="friendfinder.png" heading="Friend Finder" field="JavaScript/Express" projectInfo="Friend Finder implements friend matching based on the user's response to a ten question survey." url="https://github.com/kmvincent/FriendFinder-ExpressJS"/>
    </div>
    <div class="column is-one-third">
        <Card screenshot="crystal.jpg" heading="Crystal Collector" field="JavaScript/jQuery" projectInfo="Dynamically updating HTML app using jQuery. The user is given four random hidden numbers and a target number to reach." url="https://github.com/kmvincent/Crystal-Collector-App"/>
    </div>
    <div class="column is-one-third">
        <Card screenshot="webscraper.png" heading="NPR Web Scraper" field="JavaScript/Mongo/Express" projectInfo="News Scraper app that pulls the latest world news articles from the National Public Radio. Users are able to add and save notes." url="https://github.com/kmvincent/NPR-Scraper-MongoDB"/>
    </div>
    <div class="column is-one-third">
        <Card screenshot="liri.png" heading="Liri App" field="Node.js" projectInfo="LIRI, a Language Interpretation and Recognition Interface to demonstrate Node.js. Commands include: mytweets, spotify, movie-this" url="https://github.com/kmvincent/Liri-App-NodeJS"/>
    </div>
    <div class="column">
        <Card screenshot="bamazon.png" heading="Bamazon" field="Node.js/MySQL" projectInfo="An application that implements a simple command line based storefront using the npm Inquirer package and MySQL. The Application presents two interfaces: customer and manager." url="https://github.com/kmvincent/Bamazon-MySQL"/>
    </div>
</div>
</Container>

<Container fluid className="contain">
    <div className="container-fluid">
        <a className="container-title" href="" download>my <span id="secondColor">resume</span></a>
    </div>

</Container>

<Footer/>

</div>
          
);



export default Home;