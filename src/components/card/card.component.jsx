import React from "react";
import "./card.style.css"
export const Card = props =>(
    <div className="card-container">
        <img
         alt="characher"
         src={`https://robohash.org/${props.characher.id}?set=set2`} width={180} height={180} />
        <h2>{props.characher.name}</h2>
        <p>{props.characher.email}</p>
    </div>
)