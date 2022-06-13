import React from 'react'
import {Link} from 'react-router-dom'
export default function b(){
    return (
        <h1>Id Countries</h1>,
        <Link to={'/countries/'}>
            <button>Detiles</button>
        </Link>,
        <input type="text"></input>
    )
}