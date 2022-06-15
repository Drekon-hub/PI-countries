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
        default:
            return state
        }
    }

export default rootReducer;