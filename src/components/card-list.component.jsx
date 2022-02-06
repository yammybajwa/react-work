import React from "react";

import {Card} from"../components/card/card.component";

import "./card-list/card-list.style.css";

export const CardList = props => (
   
     <div className="card-list">
         
        {props.characher.map(characher =>( 
        <Card key={characher.id} characher={characher}/>
        ))}
    </div>
);