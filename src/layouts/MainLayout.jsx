import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Hudud/Sidebar";
import { useState } from "react";

export default function MainLayout() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className={`bg-white min-h-screen transition-all duration-300 ${!collapsed ? "pl-[288px]" : "pl-[72px]"}`}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Outlet />
        </div>
    )
}