import React from 'react'
import {Link} from 'react-router-dom'
import './NavBarCreateActivities.css'


export default function navBar({firstPage}){
    return (
        <div>
            <nav className='NavBar'>

                <ul className='nav-item'>
                    <li>
                        <Link class='active'  to = {'/home'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/activities'}>
                            Crear actividad
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}