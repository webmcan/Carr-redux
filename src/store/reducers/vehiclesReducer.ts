import {  VehiclesAction, VehiclesState } from "../../types/vehicles";



const defaultState: VehiclesState = {
    data: [] ,
    loading: false,
    error: "",
}



const vehiclesReducer = (state: VehiclesState = defaultState, action: VehiclesAction) => {
    switch (action.type) {
        case "GET_VEHICLES_START":
            return {...state, loading: true, error: "" };
        case "GET_VEHICLES_SUCCESS":
            return {...state, loading: false, data: action.payload };    
        case "GET_VEHICLES_ERROR":
            return {...state, loading: false, error: "get vehicles error" };    
        case "ADD_VEHICLE_START":
            return {...state, loading: true, error: "" };
        case "ADD_VEHICLE_SUCCESS":
            return {...state, loading: false, data: [action.payload, ...state.data] };
        case "ADD_VEHICLE_ERROR":
            return {...state, loading: false, error: "add vehicle error" };
        case "UPDATE_VEHICLE_START":
            return {...state, loading: true, error: "" };
        case "UPDATE_VEHICLE_SUCCESS":
            return {...state, loading: false, data: state.data.map(vehicle => vehicle.id === action.payload.id ? action.payload : vehicle) };
        case "UPDATE_VEHICLE_ERROR":
            return {...state, loading: false, error: "update vehicle error" };
        case "DELETE_VEHICLE_START":
            return {...state, loading: true, error: "" };
        case "DELETE_VEHICLE_SUCCESS":
            return {...state, loading: false, data: state.data.filter((vehicle) => vehicle.id !== action.payload )};
        case "DELETE_VEHICLE_ERROR":
            return {...state, loading: false, error: "delete vehicle error" };
        default: 
        return state;     

    }

}



export default vehiclesReducer 

