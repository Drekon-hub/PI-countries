import axios from 'axios'; 
    
export function getCountries(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/countries") //acá conecto mi front con mi back
        return dispatch ({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
}

export function getDetail(id){
    return async function (dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function countrySearchBar(name){
    return async function (dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: 'GET_COUNTRY_SEARCH',
                payload: json.data
            })
        } catch (error) {
            alert("No existe dicho pais...")
        }
    }
}

export function postActivities(payload){
    return async function (dispatch){
        const data = await axios.post('http://localhost:3001/activities',payload);
        return data;
    }
}

export function filterCountriesByContinent(payload){
    return {
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function filterActivity(payload){
    return{
        type: 'FILTER_ACTIVITY',
        payload
    }
}

export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation (payload){
    return {
        type: 'ORDER_BY_POPULATION',
        payload
    }
}

export function getActivities() {
    return async function(dispatch) {
        var json = await axios("http://localhost:3001/countries/allActivities")
        return dispatch ({
            type: 'GET_ACTIVITIES',
            payload: json.data
        })

    }
}