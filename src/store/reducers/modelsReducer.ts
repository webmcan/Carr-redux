import { ModelsAction, ModelsState } from "../../types/models";

const defaultState: ModelsState = {
    data: [] ,
    loading: false,
    error: "",
}

const modelsReducer = (state: ModelsState = defaultState, action: ModelsAction) => {
    switch (action.type) {
        case "GET_MODELS_START":
            return {...state, loading: true, error: "" };
        case "GET_MODELS_SUCCESS":
            return {...state, loading: false, data: action.payload };    
        case "GET_MODELS_ERROR":
            return {...state, loading: false, error: "get brand error" };  
        case "GET_BMODELS_START":
            return {...state, loading: true, error: "" };
        case "GET_BMODELS_SUCCESS":
            return {...state, loading: false, data: action.payload };    
        case "GET_BMODELS_ERROR":
            return {...state, loading: false, error: "get model error" };  
        default: 
        return state;  
    }

}



export default modelsReducer 
