import React from 'react'
import {Link} from 'react-router-dom'
import './NavBarHome.css'
import SearchBar from '../SearchBar'


export default function navBar({firstPage, handleClick}){
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
                    <li className='search-button'>
                        <button onClick={e => handleClick(e)} >Cargar todos los países</button>
                    </li>
                    <li className='search-bar'>
                        <SearchBar  firstPage={firstPage}/>
                    </li> 
                </ul>

            </nav>
        </div>
    )
}