// import { GET_COUNTRIES, GET_ACTIVITIES } from '../actions/actions.js'

const initialState  = {
    countries : [],
    allCountries : [],
    activities: [],
    allActivities: [],
    detail: []
}
function rootReducer (state = initialState, action) {
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            }
            case 'GET_ACTIVITIES':
                return{
                    ...state,
                    activities: action.payload,
                    allActivities: action.payload
                }
            case 'GET_DETAIL':
                return {
                    ...state,
                    detail: action.payload
                }
            case 'GET_COUNTRY_SEARCH':
                return{
                    ...state,
                    countries: action.payload,
                }
            case 'POST_ACTIVITY':
                return{
                    ...state,
                    activities: [...state.activities, action.payload]
                }
            case 'FILTER_BY_CONTINENT':
                const allCountries = state.allCountries;
                const filteredCountries = action.payload === "All" ? allCountries : allCountries.filter ( c => c.continent === action.payload) 
                console.log(allCountries)
                console.log(filteredCountries)
                return {
                    ...state,
                    countries: filteredCountries
                }

            case 'FILTER_ACTIVITY':
          
                const allCountriesAct = state.allCountries;
            
                const onlyCountry = allCountriesAct.filter((p) => {
                    return p.TouristActivities;
                });
                // console.log(allCountriesAct)
            
                let array = [];
            
                for (let i = 0; i < onlyCountry.length; i++) {
                    for (let j = 0; j < onlyCountry[i].TouristActivities.length; j++) {
                    if (onlyCountry[i].TouristActivities[j].name.toLowerCase() === action.payload) {
                        array.push(onlyCountry[i]);
                    }
                    }
                }
                
                const filteredCountries2 = action.payload === "Todos" ? allCountriesAct : array;
             
                return {
                    ...state,
                    countries: filteredCountries2,
                };

                case 'ORDER_BY_NAME':
                    let orderArray = action.payload === 'asc' ? state.countries.sort(function (a, b){
                        if(a.name > b.name) {
                            return 1;
                        }
                        if(a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.countries.sort(function (a, b) {
                        if(a.name > b.name) {
                            return -1;
                        }
                        if(a.name < b.name) {
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        countries: orderArray
                    }
                case 'ORDER_BY_POPULATION':
                    let orderArray2 = action.payload === 'menor' ? state.countries.sort(function (a,b){
                        if(a.population > b.population) {
                            return 1;
                        }
                        if(a.population < b.population) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.countries.sort(function (a,b){
                        if(a.population > b.population) {
                            return -1;
                        }
                        if(a.population < b.population) {
                            return 1;
                        }
                        return 0;
                    })
                    return {
                        ...state,
                        countries : orderArray2
                    }
                    
                
                default:
                    return state
                }
            }
            
            export default rootReducer;