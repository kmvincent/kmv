import React from "react";
import "./ProgressBar.css";

const ProgressBar = props => {
    return (
    <div className="columns is-mobile is-gapless">
        <div className="column is-10">
            <div className="progress-bar">
                <div class="w3-light-grey w3-round">
                    <div class="w3-container w3-color w3-round" style={{width: `${props.percentage}%`}}>{props.percentage}% {props.title}</div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
export default ProgressBar;