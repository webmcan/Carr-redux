import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export interface Auth {
    timestamp: Date;
    status: number;
    error: string;
    path: string;
}


export interface LoginForm {
    username: string; 
    password: string;
    
}

export interface AuthState {
    data: Auth;
    loading: boolean;
    error: string;
}

interface LOGIN_START {
    type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: Auth;
}

interface LOGIN_ERROR {
    type: "LOGIN_ERROR";

}

export type AuthAction = 
    LOGIN_START | 
    LOGIN_SUCCESS | 
    LOGIN_ERROR ;

export type AuthDispatch = ThunkDispatch<AuthState, any, AuthAction> ;

export const useAuthDispatch = () => useDispatch<AuthDispatch>();

//export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
