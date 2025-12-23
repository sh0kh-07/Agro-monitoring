import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Hudud/Sidebar";

export default function MainLayout(){
    return(
        <div>
            <Sidebar />
            <Outlet/>
        </div>
    )
}