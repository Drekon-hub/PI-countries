import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { countrySearchBar } from "../redux/actions/actions.js";
import './SearchBar.css'

export default function SearchBar({firstPage}){
    const dispatch = useDispatch();
    const [country, setCountry] = useState("");

    function handleSearchInput(e){
        e.preventDefault();
        setCountry(e.target.value);
    }

    function handleSubmitButton(e){
        e.preventDefault();
        firstPage()
        // setCurrentPage(1)
        if(country !== "") {
            dispatch(countrySearchBar(country))
            setCountry("");
        }else {
            alert("Por favor, ingrese un país para buscar.");
        }
    }

    return (
        <div id="search-box">
            <form id='search-form'>
                <input id='search-text' className="searchinput" onChange = {(e) => handleSearchInput(e)} type="text" value={country} placeholder="Search country for name" />

                <button id='search-button' onClick = {(e) => handleSubmitButton(e)} type="submit">🔍️</button>
            </form>
        </div>
    )
}