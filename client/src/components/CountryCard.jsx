
import React from 'react';

export default function Card({flag,name,region,id}) {

    return(
        <div class='card-container'>
            <img src={flag} alt="perrito"/>
            <h3>{name}</h3><br/>
            <span>{region}</span>
            <p>{id}</p>
        </div>    
        )
}