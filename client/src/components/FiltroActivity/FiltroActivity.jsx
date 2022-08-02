import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterActivity,
  getActivities,
  filterCountriesByContinent,
  orderByName,
  orderByPopulation,
} from '../../redux/actions/actions.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './FiltroActivity.module.css';

//! me encargo de fltrar los paises por actcividad turistica

export default function FiltroActivity({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.allActivities);

  let array = [];

  for (let i = 0; i < allActivities.length; i++) {
    let aux = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j].name.includes(allActivities[i].name.toLowerCase())) {
        aux = true;
      }
    }
    if (aux === false) {
      array.push({ name: allActivities[i].name.toLowerCase(), id: allActivities[i].id });
    }
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleFilterActivity(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterByContinent(e) {
    e.preventDefault();
    setCurrentPage(1);
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

  return (
    <div className={styles.container}>
      <div className={styles.selectdiv}>
        {/* <p className={styles.p}>Activities</p> */}

        <select
          className={styles.filter}
          key="Actividad"
          onChange={(e) => handleFilterActivity(e)}
        >
          <optgroup label="Activities">
            {/* <option className={styles.option} disabled selected>
              Select An Activity
            </option> */}
            <option disabled selected className={styles.option}>
              Select An Activity
            </option>
            <option className={styles.option} value="Todos" ket="Todos">
              All
            </option>

            {array?.map((TouristActivities) => (
              <option
                className={styles.option}
                key={TouristActivities.id}
                value={TouristActivities.name}
              >
                {TouristActivities.name ? TouristActivities.name : array}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div>
        {/* <p className={styles.p}>Continents</p> */}
        <select className={styles.filter} onChange={(e) => handleFilterByContinent(e)}>
          <optgroup label="Continents">
            <option disabled selected>
              Select An Continents
            </option>
            <option value="All" key="All">
              All
            </option>
            <option value="Africa" key="Africa">
              Africa
            </option>
            <option value="North America" key="North America">
              North America
            </option>
            <option value="South America" key="South America">
              South America
            </option>
            <option value="Asia" key="Asia">
              Asia
            </option>
            <option value="Europe" key="Europe">
              Europa
            </option>
            <option value="Oceania" key="Oceania">
              Oceania
            </option>
          </optgroup>
        </select>
      </div>

      <div>
        {/* <p className={styles.p}>Population Sort</p> */}
        <select className={styles.filter} onChange={(e) => handleOrderByPopulation(e)}>
          <optgroup label="Population">
            <option disabled selected value="">
              Population Sort
            </option>
            <option value="mayor">Higher population</option>
            <option value="menor">Lower population</option>
          </optgroup>
        </select>
      </div>

      <div>
        {/* <p className={styles.p}>Alphabetically Sort</p> */}
        <select className={styles.filter} onChange={(e) => handleOrderAzZa(e)}>
          <optgroup label="Alphabetically">
            <option disabled selected value="">
              Alphabetically Sort
            </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </optgroup>
        </select>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}
