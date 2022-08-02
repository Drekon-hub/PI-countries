import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/actions.js';
import Card from '../CountryCard/CountryCard';
import Paginado from '../Paginado/Paginado.jsx';
import FiltroActivity from '../FiltroActivity/FiltroActivity.jsx';
import NavBarHome from '../NavBar/NavBarHome';
//----------------------------------------------------------------
//----------------------------------------------------------------
export default function Home() {
  //! estos son mis hoocks------------------------------
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCountries()), [dispatch]);
  const pais = useSelector((state) => state.countries);
  //!---------------------------------------------------

  //! constantes para el ordenamiendo de la a-z // z-a
  const [, setOrder] = useState('');
  //!--------------------------------------------------

  //! aca van mis variables para el paginado-----------
  const [currentPage, setCurrentPage] = useState(1);
  const [countries] = useState(10);

  const lastCountry = currentPage * countries;
  const firstCountry = lastCountry - countries;
  const country = pais.slice(firstCountry, lastCountry);

  const paginado = (num) => {
    setCurrentPage(num);
  };

  const firstPage = () => {
    setCurrentPage(1);
  };

  const lastPage = (currentPage) => {
    setCurrentPage((currentPage = Math.ceil(pais.length / countries)));
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(pais.length / countries)) setCurrentPage(currentPage + 1);
  };
  //!--------------------------------------------------

  function handleClick(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getCountries());
  }

  //!--------------------------------------------------

  return (
    <div>
      <div>
        <NavBarHome firstPage={firstPage} handleClick={handleClick} />
        <FiltroActivity setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </div>

      <p>༼ つ✿ ◕_◕ ༽つCountries</p>

      <Paginado
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countries={countries}
        pais={pais.length}
        paginado={paginado}
        firstPage={firstPage}
        lastPage={lastPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />

      <p>
        <strong>Estás en la página: "{currentPage}"</strong>
      </p>

      <div className="container_cards">
        {country?.map((d) => {
          return (
            <div className="card">
              <Card
                key={d.id}
                id={d.id}
                name={d.name}
                flag={d.flag}
                continent={d.continent}
              />
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
