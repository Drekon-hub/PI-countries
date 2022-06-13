import React from 'react'
import {Link} from 'react-router-dom'
export default function a(){
    return (
        <h1>hola</h1>,
        <Link to={'/countries'}>
            <button>home</button>
        </Link>
    )
}