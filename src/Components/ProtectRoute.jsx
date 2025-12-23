import { Children, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";


export default function ProtectedRoute({children}) {

    const [isLoged, setIsLoged] = useState(sessionStorage.get("nesw") === "ok1");
    const location = useLocation().pathname
    useEffect(()=> {
        setIsLoged(sessionStorage.get("nesw") === "ok1")
    }, [location]);

    if(!isLoged) {
        return <Navigate to={"/login"} replace/>
    }
    return children;
}