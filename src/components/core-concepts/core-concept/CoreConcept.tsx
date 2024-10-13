import React from "react";
import "./CoreConcept.css";

function CoreConcept({image, title, description} : {image: string, title: string, description: string}) {
    return (
        <li>
            <img src={image} alt="title"></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept;