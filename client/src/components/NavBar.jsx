import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import SearchBar from './SearchBar'


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
                    <li className='search-bar'>
                        <SearchBar  firstPage={firstPage}/>
                    </li> 
                </ul>

            </nav>
        </div>
    )
}