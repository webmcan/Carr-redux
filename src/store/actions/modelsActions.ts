import { Model, ModelB, ModelsDispatch } from "../../types/models";
import api from "../../utils/api";

export const getModels = () => async (dispatch: ModelsDispatch) => {
    dispatch({type: "GET_MODELS_START"});
    try {
        const response = await api.get<Model[]>("/models");
        dispatch({type: "GET_MODELS_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "GET_MODELS_ERROR" });

    }
}

export const getModelBrand = (brand: string) => async (dispatch: ModelsDispatch) => {
    dispatch({type: "GET_MODELS_START"});
    try {
        const response = await api.get<ModelB[]>("/models/brand/" + brand);
        dispatch({type: "GET_MODELS_SUCCESS", payload: response.data});
    } catch  {
        dispatch({type: "GET_MODELS_ERROR" });

    }
}
