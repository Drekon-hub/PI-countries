import React from "react";
import './Paginado.css'

export default function Paginado ({pais,countries, country, paginado, lastPage, firstPage, nextPage, prevPage}){ 

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(pais / countries); i++) {
        pageNumbers.push(i);
      }
    
    return (
        <div>
            <nav>
                <ul className="container_page">
                    <button onClick = { () => firstPage() }> ◄◄ </button>
                    <button onClick = { () => prevPage() }> ◄ </button>

                    {
                        pageNumbers &&
                        pageNumbers.map( (num) => (
                            <li key = { num }>
                                <button onClick = { () => paginado(num) } > {num} </button>
                                
                            </li>
                        ))
                    }

                    <button onClick = { () => nextPage() }> ► </button>
                    <button onClick = { () => lastPage() }> ►►  </button>
                </ul>
            </nav>
        </div>
    )
}