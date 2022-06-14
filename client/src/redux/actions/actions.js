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


// export function getActivities(){
//     return async function (dispatch){

//     }
// }

// export const GET_COUNTRIES = "GET_COUNTRIES"; //todos los paises
// export const GET_ACTIVITIES = "GET_ACTIVITIES"; //todas las actividades que voy creando