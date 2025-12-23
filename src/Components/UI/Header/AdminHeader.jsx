import { NavLink, useNavigate } from "react-router-dom";
import { HomeIcon, MapIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function AdminHeader() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
     ${
       isActive
         ? "bg-blue-600 text-white shadow-md"
         : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
     }`;

  return (
    <div
      className="fixed top-[10px] z-30 flex justify-between items-center
                 px-6 py-2 rounded-2xl border shadow-lg
                 bg-white/80 backdrop-blur-md border-gray-200 w-[98.5%]"
    >
      {/* Левая часть: кнопка назад */}
      <div className="flex items-center gap-3">
        <Button
          variant="outlined"
          color="blue"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon className="w-5 h-5" />
          
        </Button>

        {/* Навигационные ссылки */}
        <NavLink to="/tuman/dashboard" className={linkStyle}>
          <HomeIcon className="w-5 h-5" />
          <span className="font-medium">Bosh sahifa</span>
        </NavLink>

        <NavLink to="/tuman/province" className={linkStyle}>
          <MapIcon className="w-5 h-5" />
          <span className="font-medium">Tumanlar</span>
        </NavLink>
      </div>
    </div>
  );
}
