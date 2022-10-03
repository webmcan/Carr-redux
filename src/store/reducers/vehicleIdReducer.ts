import { VehicleIdAction, VehicleIdState } from "../../types/vehicles";


const emptyForm = {
    id: 0,
    plate: "",
    brand: "",
    model: "",
    modelYear: 0,
    notes: ""
  }

const defaultIdState: VehicleIdState = {
    data: emptyForm ,
    loading: false,
    error: "",
}

const vehicleIdReducer = (state: VehicleIdState = defaultIdState, action: VehicleIdAction) => {
    switch (action.type) {
        case "GET_VEHICLEID_START":
            return {...state, loading: true, error: "" };
        case "GET_VEHICLEID_SUCCESS":
            return {...state, loading: false, data: action.payload };    
        case "GET_VEHICLEID_ERROR":
            return {...state, loading: false, error: "get vehicleId error" };    
    default: 
    return state;     
    }
    
}

export default vehicleIdReducer 
