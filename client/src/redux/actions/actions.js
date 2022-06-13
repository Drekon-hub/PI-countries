import axios from 'axios';

export function getCountries(){
    return async function(dispatch) {
        let json = await axios.get("http://localhost:3001/countries");
        return dispatch({type: 'ALLCONTRIES', payload: json.data});
    }
}