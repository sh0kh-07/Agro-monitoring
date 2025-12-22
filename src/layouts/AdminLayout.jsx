import { Outlet } from "react-router-dom";
import AdminHeader from "../Components/UI/Header/AdminHeader";

export default function AdminLayout() {

    return (
        <div className=" w-full overflow-hidden bg-[#FAFAFA] relative px-[10px] min-h-screen">
            <AdminHeader />
            <div className="mt-[80px]">
                <Outlet />
            </div>
        </div>
    );
}
