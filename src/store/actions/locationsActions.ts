import { Locations, LocationsDispatch } from "../../types/locations";
import api from "../../utils/api";

export const getLocations = () => async (dispatch: LocationsDispatch) => {
    dispatch({type: "GET_LOCATIONS_START"});
    try {
        const response = await api.get<Locations[]>("/locations");
        dispatch({type: "GET_LOCATIONS_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "GET_LOCATIONS_ERROR" });

    }
}