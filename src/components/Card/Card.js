import React from "react";
import "./Card.css";
  
  const Card = props => {
    return (
    <div>

        <div className="flip-container is-4by3" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
                <div class="front">
                    <img className="screenshot" src={props.screenshot}/>        
                </div>
                <div className="back" id="info">
                    <br/>
                    <h3 className="text">{props.heading}</h3>
                    <h6 className="field"><span id="highlight">{props.field}</span></h6>
                    <p className="project-info">{props.projectInfo}</p>
                    <a class="button is-rounded" id="button2" href={props.url} target="_blank">LEARN MORE</a>
                </div>
            </div>
        </div> 

      
    </div>
    )
}    

export default Card;
