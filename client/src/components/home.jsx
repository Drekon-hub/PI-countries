import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions/actions.js";
import Card from "./CountryCard";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
//----------------------------------------------------------------
//----------------------------------------------------------------
export default function Home() {

  //! estos son mis hoocks------------------------------
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCountries()), []);
  const pais = useSelector((state) => state.countries);
  //!---------------------------------------------------

  //! constantes para el ordenamiendo de la a-z // z-a
  const [orden, setOrder] = useState("")
  //!--------------------------------------------------

  //! aca van mis variables para el paginado-----------
  const [currentPage, setCurrentPage] = useState(1);
  const [countries] = useState(10)
  
  const lastCountry = currentPage * countries
  const firstCountry = lastCountry - countries
  const currentCountries = pais.slice(firstCountry, lastCountry);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  const firstPage = (currentPage) => {
    setCurrentPage(currentPage - 1)
  }

  const lastPage = (currentPage) => {
    setCurrentPage(currentPage = (Math.floor(pais.length/countries)))
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < (Math.floor(pais.length/countries))) setCurrentPage(currentPage+1) 
  }

  return (
    <div>
      <p>༼ つ✿ ◕_◕ ༽つCountries</p>
      <SearchBar/>
      <Paginado
        countries={countries}
        pais={pais.length}
        paginado={paginado}
        firstPage={firstPage}
        lastPage={lastPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
        {
        pais?.map((d) => {
            return (
              <div>
              {/* <Link to={`/home/{c.id}`}> el c.id es para clickear y que me lleve al pais como tal.*/}
              <Card
                key={d.id}
                id={d.id}
                name={d.name}
                flag={d.flag}
                region={d.region}
              />
              {/* </Link> */}
              </div>
            );
          })}
        <Paginado
          countries={countries}
          pais={pais.length}
          paginado={paginado}
          firstPage={firstPage}
          lastPage={lastPage}
          prevPage={prevPage}
          nextPage={nextPage}
      />

    </div>
  );
}
