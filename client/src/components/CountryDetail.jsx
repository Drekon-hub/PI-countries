import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions/actions.js";
import { useEffect } from "react";
import './CountryDetail.css'

export default function Detail(props) {
    const dispatch  = useDispatch()

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const theCountry = useSelector((state)=> state.detail)
    // console.log(theCountry)

    return (
        <div className="bigDetail">
            <section>
                <Link to='/home'>
                    <button>Volver</button>
                </Link>
            </section>

            <section>
                {
                    theCountry.name ?
                    <div className="carad">
                        <div>
                            <h1 key = {theCountry.name}>
                                {theCountry.name}
                            </h1>
                        </div>
                    <div>
                        <img src={theCountry.flag} alt="Not found" width="300px" height="200px"/>
                    </div>

                        <section>
                            <div className="containerr">
                                <h2 className="titleCapitalized" key = {theCountry.id}>({theCountry.id})</h2>

                                <h2 className="titleCapitalized" key = {theCountry.capital}>Capital: {theCountry.capital}</h2>

                                <h2 className="titleCapitalized" key = {theCountry.continent}>Continente: {theCountry.continent}</h2>

                                <h2 className="titleCapitalized" key={theCountry.subregion}>Subregion: {theCountry.subregion}</h2>

                                <h2 className="titleCapitalized" key= {theCountry.area}>Area: {theCountry.area}Km²</h2>

                                <h2 className="titleCapitalized" key = {theCountry.population}>Poblacion: {theCountry.population}</h2>
                            </div>
                        </section>
                    </div>
                    :
                    <p>Loading...</p>
                }
            </section>

            <section>
                <h2 className="titleDetail">Actividades</h2>
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