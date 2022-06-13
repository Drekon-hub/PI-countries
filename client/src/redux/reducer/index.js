const initialState  = {
    allcountries: [],
    allActivities: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALLCONTRIES":
            return {...state, allcountries: action.payload}
        case "ALLACTIONS":
            return {...state, allactivities:action.payload}
        default:
            return state
        }
    }

export default rootReducer;