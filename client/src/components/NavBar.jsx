import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import SearchBar from './SearchBar'


export default function navBar({setCurrentPage}){
    return (
        <div>
            <nav className='NavBar'>

                <ul className='nav-item'>
                    <li>
                        <Link className='active' to = {'/home'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/activities'}>
                            Crear actividad
                        </Link>
                    </li>
                    <li>
                        <a href="#">Link 3</a>
                    </li>
                    <li>
                        <SearchBar setCurrentPage={setCurrentPage}/>
                    </li> 
                </ul>

            </nav>
        </div>
    )
}