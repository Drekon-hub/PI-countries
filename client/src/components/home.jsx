import React from "react";
import './Home.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation } from "../redux/actions/actions.js";
import Card from "./CountryCard";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import FiltroActivity from "./FiltroActivity";
import NavBar from "./NavBar";
//----------------------------------------------------------------
//----------------------------------------------------------------
export default function Home() {

  //! estos son mis hoocks------------------------------
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCountries()), [dispatch]);
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
  const country = pais.slice(firstCountry, lastCountry);
  
  const paginado = (num) => {
    setCurrentPage(num)
  }
  
  const firstPage = () => {
    setCurrentPage(1)
  }

  const lastPage = (currentPage) => {
    setCurrentPage(currentPage = (Math.ceil(pais.length/countries)))
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < (Math.ceil(pais.length/countries))) setCurrentPage(currentPage+1) 
  }
  //!--------------------------------------------------

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries())
  }

  function handleFilterByContinent(e){
    e.preventDefault();
    dispatch(filterCountriesByContinent(e.target.value));
  }

  function handleOrderAzZa(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleOrderByPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  //!--------------------------------------------------

  return (
    <div>

      <div>

        <NavBar/>

        <h3>ACTIVIDADES</h3>
        <FiltroActivity setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </div>

      <div>
        <h3>CONTINENTE</h3>
          <select onChange={e => handleFilterByContinent(e)}>
            <option value="All" key="All">Todos</option>
            <option value="Africa" key="Africa">Africa</option>
            <option value="North America" key="North America">North America</option>
            <option value="South America" key="South America">South America</option>
            <option value="Asia" key="Asia">Asia</option>
            <option value="Europe" key="Europe">Europa</option>
            <option value="Oceania" key="Oceania">Oceania</option>
          </select>
      </div>

      <button onClick={e => handleClick(e)}>
        Cargar todos los países
      </button>

      <div>
        <h3>POBLACIÓN</h3>
        <select onChange={e => handleOrderByPopulation(e)}>
          <option value="">-</option>
          <option value="mayor">Mayor poblacion</option>
          <option value="menor">Menor poblacion</option>
        </select>
      </div>

      <div>
        <h3>ORDEN ALFABÉTICO</h3>
          <select onChange ={e => handleOrderAzZa(e)}>
            <option value="">-</option> 
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
      </div>

      <p>༼ つ✿ ◕_◕ ༽つCountries</p>

      <SearchBar setCurrentPage={setCurrentPage}/>

      <Link to={'/activities'}>
        <button>Crear actividad</button>
      </Link>

      <Paginado
        countries={countries}
        pais={pais.length}
        paginado={paginado}
        firstPage={firstPage}
        lastPage={lastPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />

      <p><strong>Estás en la página: "{currentPage}"</strong></p>

      <div className="container_cards">
        {
        country?.map((d) => {
            return (
              <div className="card">
              {/* <Link to={`/home/{c.id}`}> el c.id es para clickear y que me lleve al pais como tal.*/}
              <Card
                key={d.id}
                id={d.id}
                name={d.name}
                flag={d.flag}
                continent={d.continent}
              />
              {/* </Link> */}
              </div>
            );
          })}
          </div>
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
