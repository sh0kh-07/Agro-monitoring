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
      className="fixed top-[10px] z-30 flex flex-col sm:flex-row justify-between items-start sm:items-center
                 px-4 sm:px-6 py-3 rounded-2xl border shadow-lg
                 bg-white/80 backdrop-blur-md border-gray-200 w-[95%] sm:w-[98%] mx-auto"
    >
      {/* Левая часть: кнопка назад */}
      <div className="flex items-center gap-3 mb-2 sm:mb-0">
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
          <span className="font-medium hidden sm:inline">Bosh sahifa</span>
        </NavLink>

        <NavLink to="/tuman/province" className={linkStyle}>
          <MapIcon className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Tumanlar</span>
        </NavLink>
      </div>

      {/* Можно добавить правую часть для мобильного меню */}
      <div className="sm:hidden">
        {/* Тут можно вставить иконку для мобильного меню */}
      </div>
    </div>
  );
}
