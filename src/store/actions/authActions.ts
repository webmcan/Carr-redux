import { Auth, AuthDispatch, LoginForm } from "../../types/auth";
import api from "../../utils/api";

export const login = (creeds: LoginForm) => async (dispatch: AuthDispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const response = await api.post<Auth>("/login", 
        {
                  id: 0,
                  email: creeds.username,
                  password: creeds.password,
                
                },
                {
                  headers:{
                    "Accept" : "*/*" ,
                    "Content-Type" : "application/json" 
                  }
                }
          
            
            );
         dispatch({type: "LOGIN_SUCCESS", payload: response.data});
        localStorage.setItem("token", window.btoa(unescape(encodeURIComponent((creeds.username + ":" + creeds.password)))));
        
    } catch {
        dispatch({type: "LOGIN_ERROR" });

    }
}