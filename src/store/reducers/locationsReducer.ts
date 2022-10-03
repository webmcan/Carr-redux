import { LocationsAction, LocationsState } from "../../types/locations";


const defaultState: LocationsState = {
    data: [] ,
    loading: false,
    error: "",
}


const locationsReducer = (state: LocationsState = defaultState, action: LocationsAction) => {
    switch (action.type) {
        case "GET_LOCATIONS_START":
            return {...state, loading: true, error: "" };
        case "GET_LOCATIONS_SUCCESS":
            return {...state, loading: false, data: action.payload };    
        case "GET_LOCATIONS_ERROR":
            return {...state, loading: false, error: "get location error" };  
        default: 
        return state;  
    }

}

export default locationsReducer 
