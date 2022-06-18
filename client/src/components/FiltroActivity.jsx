import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterActivity, getActivities } from "../redux/actions/actions.js";

//! me encargo de fltrar los paises por actcividad turistica

export default function FiltroActivity({setCurrentPage, setOrder}) {
    const dispatch = useDispatch();

    const allActivities = useSelector((state) => state.allActivities);

    let array = [];
    

    for (let i = 0; i < allActivities.length; i++){
        let aux = false;
        for (let j = 0; j < array.length; j++){
            if(array[j].name.includes(allActivities[i].name.toLowerCase())){
                aux = true;
        }
    }
    if(aux === false){
        array.push({name: allActivities[i].name.toLowerCase(),
        id: allActivities[i].id})
    }}

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch]);

    function handleFilterActivity(e){
        e.preventDefault();
        dispatch(filterActivity(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    }
    
    return (
        <div>
            <div>
                <select key= 'Actividad' onChange={(e) => handleFilterActivity(e)}>
                <option key="Todos" value="Todos">
                    Todos
                </option>
    
                    {
                        array?.map((TouristActivities) => (
                            <option key={TouristActivities.id} value={TouristActivities.name}>
                                {console.log(TouristActivities.name)}
                                {TouristActivities.name ? TouristActivities.name : array}
                            </option>
                        ))
                    }
    
                </select>
            </div>
        </div>
    )
}