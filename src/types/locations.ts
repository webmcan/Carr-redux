import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";


export interface LocationsState {
    data: Locations[];
    loading: boolean;
    error: string;
}

export interface Locations { 
    vehicleId: number;
    plate: string;
    longitude: number; 
    latitude: number;
    direction: number;
   
}

interface GET_START {
    type: "GET_LOCATIONS_START";
}

interface GET_SUCCESS {
    type: "GET_LOCATIONS_SUCCESS";
    payload: Locations[];
}

interface GET_ERROR {
    type: "GET_LOCATIONS_ERROR";

}

export type LocationsAction = 
    GET_START | 
    GET_SUCCESS | 
    GET_ERROR;

export type LocationsDispatch = ThunkDispatch<LocationsState, void, LocationsAction> ;

export const useLocationDispatch = () => useDispatch<LocationsDispatch>();