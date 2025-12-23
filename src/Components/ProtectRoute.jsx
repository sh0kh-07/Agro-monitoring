import { Children, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";


export default function ProtectRoute({children}) {

    const [isLoged, setIsLoged] = useState(sessionStorage.getItem("nesw") === "ok1");
    const location = useLocation().pathname
    useEffect(()=> {
        setIsLoged(sessionStorage.getItem("nesw") === "ok1")
    }, [location]);

    if(!isLoged) {
        return <Navigate to={"/login"} replace/>
    }
    return children;
}