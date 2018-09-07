import React from "react";
import "./Title.css";

const Title = props => {
    return (
    <div className="container-fluid">
        <p className="container-title">{props.first} <span id="secondColor">{props.second}</span></p>
    </div>
    )
}
    
export default Title;