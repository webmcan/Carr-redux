import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";


export interface ModelsState {
    data: Model[];
    loading: boolean;
    error: string;
}

export interface ModelsStateB {
    data: ModelB[];
    loading: boolean;
    error: string;
}

export interface Model { 
    id: number;
    brand: string;
    model: string ;
   
}

export interface ModelB { 
    id: number;
    brand: string;
    model: string ;
   
}

interface GET_START {
    type: "GET_MODELS_START";
}

interface GET_SUCCESS {
    type: "GET_MODELS_SUCCESS";
    payload: Model[];
}

interface GET_ERROR {
    type: "GET_MODELS_ERROR";

}

interface GET_M_START {
    type: "GET_BMODELS_START";
}

interface GET_M_SUCCESS {
    type: "GET_BMODELS_SUCCESS";
    payload: ModelB[];
}

interface GET_M_ERROR {
    type: "GET_BMODELS_ERROR";

}

export type ModelsAction = 
    GET_START |
    GET_SUCCESS |
    GET_ERROR |
    GET_M_START |
    GET_M_SUCCESS |
    GET_M_ERROR;



export type ModelsDispatch = ThunkDispatch<ModelsState, void, ModelsAction> ;

export type ModelsBDispatch = ThunkDispatch<ModelsStateB, void, ModelsAction> ;


export const useModelsDispatch = () => useDispatch<ModelsDispatch>();
export const useModelsBDispatch = () => useDispatch<ModelsDispatch>();