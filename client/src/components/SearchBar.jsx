import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { countrySearchBar } from "../redux/actions/actions.js";

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch();
    const [country, setCountry] = useState("");

    function handleSearchInput(e){
        e.preventDefault();
        setCountry(e.target.value);
    }

    function handleSubmitButton(e){
        e.preventDefault();
        setCurrentPage(1)
        if(country !== "") {
            dispatch(countrySearchBar(country))
            setCountry("");
        }else {
            alert("Por favor, ingrese un país para buscar.");
        }
    }

    return (
        <div>
                <input onChange = {(e) => handleSearchInput(e)} type="text" value={country} placeholder="Search country for name" />

                <button onClick = {(e) => handleSubmitButton(e)} type="submit">🔍️</button>
        </div>
    )
}