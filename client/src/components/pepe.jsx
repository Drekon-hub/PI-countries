// import React from 'react'
// import {Link} from 'react-router-dom'
// import { getCountries } from "../redux/actions/actions.js";
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CountryCard from './CountryCard.jsx'

// export default function Home(){

//     //! Estos son mis hoocks
//     const dispatch = useDispatch();
//     const {countries} = useSelector((state) => state.countries)

//     useEffect (()=>{
//         dispatch(getCountries());
//     },[dispatch])

    // //! constante para el orden el a-z/z-a
    // const [order, setOrder] = useState("")

    //! constantes para el paginado
    // const [currentPage, setCurrentPage] = useState(1);
    // const [countries] = useState(10);


    // const lastCountry = currentPage * countries
    // const firstCountry = lastCountry - countries
    // const currentCountries = allCountries.slice(firstCountry, lastCountry);


    // const paginado = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }

    // const firstPage = (currentPage) => {
    //     setCurrentPage(currentPage = 1)
    // }

    // const lastPage = (currentPage) => {
    //     setCurrentPage(currentPage = (Math.floor(allCountries.length/countries)))
    // }

    // const prevPage = () => {
    //     if(currentPage > 1) setCurrentPage(currentPage - 1)
    // }

    // const nextPage = () => {
    //     if(currentPage < (Math.floor(allCountries.length/countries))) setCurrentPage(currentPage + 1)
    // }

 
    // console.log(countries)

    //! funciones mejoradas

    // function handleClick(e){
    //     e.preventDefault();
    //     dispatch(getCountries());
    // }

//     return (
//         <div>
//             <h3>CountryWiki </h3>
//             <Link to='/activities'>
//                 <button>Crear actividad</button>
//             </Link>
//             {
//             countries?.map((d) => {
//             return (
//               <div>
//               <CountryCard
//                 key={d.id}
//                 name={d.name}
//                 region={d.region}
//                 flagImg={d.flagImg}
//               />
//               </div>
//             );
//           })}
//         </div>
