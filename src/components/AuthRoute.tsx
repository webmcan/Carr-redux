import { Navigate, Route, RouteProps, Outlet } from "react-router-dom";

const useAuth=()=>{
    const authtoken=localStorage.getItem('token')
    if(authtoken){
      return true
    } else {
      return false
    }
  }


const AuthRoute = (props:any) => {
    const auth = useAuth();
    return auth?<Outlet/> : <Navigate to = '/login'/>
}

export default AuthRoute;