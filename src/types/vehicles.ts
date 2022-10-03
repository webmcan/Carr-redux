import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export interface VehiclesState {
    data: Vehicle[] ;
    loading: boolean;
    error: string;
}

export interface VehicleIdState {
    data: Vehicle ;
    loading: boolean;
    error: string;
}

export interface Vehicle { 
    id: number;
    plate: string;
    brand: string;
    model: string;
    modelYear: number;
    notes: string;
}

export interface VehiclesForm { 
    plate: string;
    modelId: number;
    modelYear: number;
    notes: string;
  }
interface GET_START {
    type: "GET_VEHICLES_START";
}

interface GET_SUCCESS {
    type: "GET_VEHICLES_SUCCESS";
    payload: Vehicle[];
}

interface GET_ERROR {
    type: "GET_VEHICLES_ERROR";

}

interface GET_ID_START {
    type: "GET_VEHICLEID_START";
}

interface GET_ID_SUCCESS {
    type: "GET_VEHICLEID_SUCCESS";
    payload: Vehicle;
}

interface GET_ID_ERROR {
    type: "GET_VEHICLEID_ERROR";

}

interface ADD_START {
    type: "ADD_VEHICLE_START";
}
  
interface ADD_SUCCESS {
    type: "ADD_VEHICLE_SUCCESS";
    payload: Vehicle;
}
  
interface ADD_ERROR {
    type: "ADD_VEHICLE_ERROR";
}
interface UPDATE_START {
    type: "UPDATE_VEHICLE_START";
}
interface UPDATE_SUCCESS {
    type: "UPDATE_VEHICLE_SUCCESS";
    payload: Vehicle;
}
interface UPDATE_ERROR {
    type: "UPDATE_VEHICLE_ERROR";
}

interface DELETE_START {
    type: "DELETE_VEHICLE_START";
}
interface DELETE_SUCCESS {
    type: "DELETE_VEHICLE_SUCCESS";
    payload: number;
}
interface DELETE_ERROR {
    type: "DELETE_VEHICLE_ERROR";
}

export type VehiclesAction = 
    GET_START | 
    GET_SUCCESS | 
    GET_ERROR |
    ADD_START | 
    ADD_SUCCESS | 
    ADD_ERROR |
    UPDATE_START | 
    UPDATE_SUCCESS | 
    UPDATE_ERROR |
    DELETE_START | 
    DELETE_SUCCESS | 
    DELETE_ERROR 
   
    ;

export type VehicleIdAction =
    GET_ID_START | 
    GET_ID_SUCCESS | 
    GET_ID_ERROR ;

    
    

export type VehiclesDispatch = ThunkDispatch<VehiclesState, void, VehiclesAction> ;

export const useVehiclesDispatch = () => useDispatch<VehiclesDispatch>();

export type VehicleIdDispatch = ThunkDispatch<VehicleIdState, void, VehicleIdAction> ;

export const useVehicleIdDispatch = () => useDispatch<VehicleIdDispatch>();