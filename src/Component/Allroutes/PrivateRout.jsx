import {  useContext } from "react"


import { MyAuthContext } from "../Context/AuthContextProvide";

import { Navigate } from "react-router-dom";
 import { children } from "react";



function PrivateRout({children}){
    const {isAuth} = useContext (MyAuthContext);
    if(!isAuth){
        return <Navigate to = "/admin" />

    }
    return children;
        
    
}
export default PrivateRout;