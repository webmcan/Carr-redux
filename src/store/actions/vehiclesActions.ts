import axios from "axios";
import { Vehicle, VehicleIdDispatch, VehiclesDispatch, VehiclesForm } from "../../types/vehicles";
import api from "../../utils/api";

const token = localStorage.getItem("token");

var basicAuth = 'Basic ' + token ;

console.log(basicAuth);

export const getVehicles = () => async (dispatch: VehiclesDispatch) => {
    dispatch({type: "GET_VEHICLES_START"});
    try {
        const response = await axios.get<Vehicle[]>("/vehicles");
        dispatch({type: "GET_VEHICLES_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "GET_VEHICLES_ERROR" });

    }
}

export const getVehicleId = (vehicleId: number) => async (dispatch: VehicleIdDispatch) => {
    dispatch({type: "GET_VEHICLEID_START"});
    try {
        const response = await api.get<Vehicle>("/vehicles/" + vehicleId );
        dispatch({type: "GET_VEHICLEID_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "GET_VEHICLEID_ERROR" });

    }
}

export const addVehicle = (form: VehiclesForm) => async (dispatch: VehiclesDispatch) => {
    dispatch({type: "ADD_VEHICLE_START"});
    try {
        const response = await api.post<Vehicle>("/vehicles", form,
        {  
            headers: {
                Authorization: basicAuth,
              }, 
            }
        );
        dispatch({type: "ADD_VEHICLE_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "ADD_VEHICLE_ERROR" });
    }
}

export const updateVehicle = (form: VehiclesForm, vehicleId: number) => async (dispatch: VehiclesDispatch) => {
    dispatch({type: "UPDATE_VEHICLE_START"});
    try {
        const response = await api.put<Vehicle>("/vehicles/" + vehicleId, form,
        {  
            headers: {
                Authorization: basicAuth,
              }, 
            }
        );
        dispatch({type: "UPDATE_VEHICLE_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "UPDATE_VEHICLE_ERROR" });
    }
}

export const deleteVehicle = (vehicleId: number) => async (dispatch: VehiclesDispatch) => {
    dispatch({type: "DELETE_VEHICLE_START"});
    try {
        await api.delete<Vehicle>("/vehicles/" + vehicleId, 
        {  
            headers: {
                Authorization: basicAuth,
              }, 
            }
        );
        dispatch({type: "DELETE_VEHICLE_SUCCESS", payload: vehicleId});
    } catch  {
        dispatch({type: "DELETE_VEHICLE_ERROR" });
    }
}