import React from 'react';
import { Link } from "react-router-dom";
import './CountryCard.css'

export default function Card({flag,name,continent,id}) {

    return(
        <div className="container2">
            <Link  to={`/home/${id}`}>
            <img className="flag" src={flag} alt="Country"/>
            </Link>
                <div className="container">
            <Link to={`/home/${id}`}>
                        <div className='container'>
                            <div>
                                <h3>║{name}║</h3>
                                <h5>║{continent}║</h5>
                            </div>
                            
                        </div>
                    </Link>
                </div>
        </div>    
        )
}