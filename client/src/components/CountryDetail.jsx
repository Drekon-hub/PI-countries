import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions/actions.js";
import { useEffect } from "react";

export default function Detail(props) {
    const dispatch  = useDispatch()

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const theCountry = useSelector((state)=> state.detail)
    // console.log(theCountry)

    return (
        <div>
            <section>
                <Link to='/home'>
                    <button>Volver</button>
                </Link>
            </section>

            <section>
                {
                    theCountry.name ?
                    <div>
                        <img src={theCountry.flag} alt="Not found"/>

                        <section>
                            <div>
                                <h1 key = {theCountry.name}>
                                    {theCountry.name}
                                </h1>
                                <h1 key = {theCountry.id}>
                                    ({theCountry.id})
                                </h1>
                            </div>

                            <div>
                                <h1>Capital</h1>
                                <h4 key = {theCountry.capital}>{theCountry.capital}</h4>
                            </div>

                            <div>
                                <h1>Continente</h1>
                                <h4 key = {theCountry.continent}>{theCountry.continent}</h4>
                            </div>

                            <div>
                                <h1>Subregion</h1>
                                <h4 key={theCountry.subregion}>{theCountry.subregion}</h4>
                            </div>

                            <div>
                                <h1>Area</h1>
                                <h4 key= {theCountry.area}>{theCountry.area}km2</h4>
                            </div>

                            <div>
                                <h1>Poblacion</h1>
                                <h4 key = {theCountry.population}>{theCountry.population}</h4>
                            </div>
                        </section>
                    </div>
                    :
                    <p>Loading...</p>
                }
            </section>

            <section>
                <h1>Actividades</h1>
                {theCountry.name && (
                    <div>
                        <section>
                            <div>
                                {theCountry.TouristActivities &&(
                                    theCountry.TouristActivities.map((act) =>(
                                        <div key = {act.name}>
                                            <div>
                                                <h3 key = {act.name}>
                                                    ACTIVIDAD: {act.name}
                                                </h3>
                                            </div>

                                            <div>
                                                <h3 key = {act.difficulty}>
                                                    DIFICULTAD: {act.difficulty}
                                                </h3>
                                            </div>

                                            <div>
                                                <h3 key = {act.name + '.'}>
                                                    DURACIÓN: {act.duration}
                                                </h3>
                                            </div>

                                            <div>
                                                <h3 key = {act.season}>
                                                    TEMPORADA: {act.season}
                                                </h3>
                                            </div>

                                        </div>
                                    ))
                                )}
                            </div>
                        </section>
                    </div>
                )}
            </section>
        </div>
    )
}