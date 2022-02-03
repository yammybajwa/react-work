import React from "react";
import "./card-list/card-list.style.css";
export const CardList = props => {
    console.log(props)
    return <div className="card-list">
        {props.characher.map(characher => <h1 key={characher.id}>{characher.name}</h1>)}
    </div>
}