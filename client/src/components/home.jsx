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
      <p>༼ つ✿ ◕_◕ ༽つCountries</p>

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

    </div>
  );
}
