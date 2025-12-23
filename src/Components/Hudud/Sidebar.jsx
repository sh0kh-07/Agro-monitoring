import { useState } from "react"
import {
  Home,
  FileText,
  Users,
  FolderOpen,
  BarChart3,
  UserSquare2,
  Settings,
  ChevronDown,
  ChevronLeft,
  LogOut,
} from "lucide-react"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState("dashboard")
  const [openMenu, setOpenMenu] = useState(null)

  const toggleMenu = (id) =>
    setOpenMenu(openMenu === id ? null : id)

  return (
    <aside
      className={`h-screen flex flex-col transition-all duration-300
      ${collapsed ? "w-20" : "w-72"}
      bg-[#1b2a3a] text-[#e6edf3] border-r border-[#2c3e50]`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#2c3e50]">
        {!collapsed && (
          <span className="text-sm font-semibold tracking-wide">
            ADMIN PANEL
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-[#24384d]"
        >
          <ChevronLeft
            size={18}
            className={`${collapsed ? "rotate-180" : ""} transition`}
          />
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
        <MenuItem
          icon={Home}
          label="Bosh sahifa"
          collapsed={collapsed}
          active={active === "dashboard"}
          onClick={() => setActive("dashboard")}
        />

        <MenuItem
          icon={FileText}
          label="Murojaatlar"
          collapsed={collapsed}
          active={active === "appeals"}
          badge={12}
          onClick={() => setActive("appeals")}
        />

        <MenuItem
          icon={Users}
          label="Fuqarolar"
          collapsed={collapsed}
          active={active === "citizens"}
          onClick={() => setActive("citizens")}
        />

        {/* SUB MENU */}
        <div>
          <button
            onClick={() => toggleMenu("docs")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
            hover:bg-[#24384d]
            ${active === "docs" ? "bg-[#2563eb] text-white" : "text-[#cbd5e1]"}`}
          >
            <FolderOpen size={18} />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">Hujjatlar</span>
                <ChevronDown
                  size={16}
                  className={`transition ${openMenu === "docs" ? "rotate-180" : ""
                    }`}
                />
              </>
            )}
          </button>

          {!collapsed && openMenu === "docs" && (
            <div className="ml-9 mt-1 space-y-1">
              {["Barcha", "Arxiv", "Shablonlar"].map((t) => (
                <button
                  key={t}
                  className="block w-full text-left px-3 py-1.5 rounded
                  text-xs text-[#94a3b8] hover:bg-[#24384d]"
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>

        <MenuItem
          icon={BarChart3}
          label="Hisobotlar"
          collapsed={collapsed}
          active={active === "reports"}
          onClick={() => setActive("reports")}
        />

        <MenuItem
          icon={UserSquare2}
          label="Xodimlar"
          collapsed={collapsed}
          active={active === "employees"}
          onClick={() => setActive("employees")}
        />

        <MenuItem
          icon={Settings}
          label="Sozlamalar"
          collapsed={collapsed}
          active={active === "settings"}
          onClick={() => setActive("settings")}
        />
      </nav>

      {/* FOOTER */}
      <div className="border-t border-[#2c3e50] p-3 space-y-2">
        <div className="flex items-center gap-3 px-2">
          <div className="h-9 w-9 rounded-full bg-[#2563eb] flex items-center justify-center text-sm font-bold">
            AK
          </div>
          {!collapsed && (
            <div>
              <div className="text-sm font-semibold">
                Alisher Karimov
              </div>
              <div className="text-xs text-[#94a3b8]">
                Administrator
              </div>
            </div>
          )}
        </div>

        <button
          className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded
          text-red-400 hover:bg-[#24384d]"
        >
          <LogOut size={16} />
          {!collapsed && "Chiqish"}
        </button>
      </div>
    </aside>
  )
}

/* ---------- ITEM COMPONENT ---------- */

function MenuItem({
  icon: Icon,
  label,
  collapsed,
  active,
  badge,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition
      ${active
          ? "bg-[#2563eb] text-white"
          : "text-[#cbd5e1] hover:bg-[#24384d]"
        }`}
    >
      <Icon size={18} />
      {!collapsed && (
        <>
          <span className="flex-1 text-left">{label}</span>
          {badge && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#3b82f6] text-white">
              {badge}
            </span>
          )}
        </>
      )}
    </button>
  )
}
