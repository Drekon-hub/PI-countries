import React from "react";

export default function Paginado ({countries, allCountries, paginado, lastPage, firstPage, nextPage, prevPage}){ 
    const pageNumbers = []

    for (let i = 1; i <=Math.ceil(allCountries/countries); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <nav>
                <ul>
                    <button onClick = { () => firstPage() }> Primera </button>
                    <button onClick = { () => prevPage() }> Anterior </button>
                    {
                        pageNumbers &&
                        pageNumbers.map( number => (
                            <li key = { number }>
                                <p onClick = { () => paginado(number) } > {number} </p>
                            </li>
                        ))
                    }
                    <button onClick = { () => nextPage() }> Siguiente </button>
                    <button onClick = { () => lastPage() }> Última  </button>
                </ul>
            </nav>
        </div>
    )
}