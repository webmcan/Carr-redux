import { AuthAction, AuthState, Auth  } from "../../types/auth";

const defaultState: AuthState = {
    data: {} as Auth ,
    loading: false,
    error: "",
}

const authReducer = (state: AuthState = defaultState, action: AuthAction ) => {
    switch (action.type) {
        case "LOGIN_START":
            return {...state, loading: true, error: "" };
        case "LOGIN_SUCCESS":
            return {...state, loading: false, data: action.payload };    
        case "LOGIN_ERROR":
            return {...state, loading: false, error: "Byte Me." };    
        default: 
        return state;     
    }      
};

export default authReducer;