import { combineReducers} from "redux" ;
import { AuthState } from "../types/auth";
import { ModelsState, ModelsStateB } from "../types/models";
import { VehicleIdState, VehiclesState } from "../types/vehicles";
import authReducer from "./reducers/authReducer";
import vehiclesReducer from "./reducers/vehiclesReducer";
import modelsReducer from "./reducers/modelsReducer";
import locationsReducer from "./reducers/locationsReducer";
import { LocationsState } from "../types/locations";
import vehicleIdReducer from "./reducers/vehicleIdReducer";


export interface  AppState {
    auth: AuthState ;
    vehicles: VehiclesState ;
    vehicleId: VehicleIdState;
    models: ModelsState ;
    brands: ModelsStateB;
    locations: LocationsState ;
}


const rootReducer = combineReducers<AppState>({
    auth: authReducer ,
    vehicles: vehiclesReducer ,
    vehicleId: vehicleIdReducer,
    models: modelsReducer,
    brands: modelsReducer,
    locations: locationsReducer,
   
});

export default rootReducer; 