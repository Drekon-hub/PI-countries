// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { getCountries } from '../redux/actions/actions.js'

// export default function Home () {
//     const {pais} = useSelector(state => state.countries) 
//     const dispatch = useDispatch();

//     useEffect (()=>{
//         dispatch(getCountries());
//     },[dispatch])

//   return (
//     <div>home</div>
//   )
// }

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions/actions.js";
import Card from "./CountryCard";
//----------------------------------------------------------------
//----------------------------------------------------------------
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getCountries()), []);
  const pais = useSelector((state) => state.countries);


  return (
    <div>
      <p>༼ つ✿ ◕_◕ ༽つDogs</p>

        {
        pais?.map((d) => {
            return (
              <div>
              <Link to={'/activities'}>
              <Card
                key={d.id}
                id={d.id}
                name={d.name}
                flag={d.flag}
                region={d.region}
              />
              </Link>
              </div>
            );
          })}

    </div>
  );
}
