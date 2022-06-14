
import React from 'react';
import { Link } from "react-router-dom";

export default function Card({flag,name,region,id}) {

    return(
        <div class='card-container'>
            <Link to={`/home/${id}`}>
            <img src={flag} alt="Country"/>
            <h3>{name}</h3><br/>
            <span>{region}</span>
            <p>{id}</p>
            </Link>
        </div>    
        )
}