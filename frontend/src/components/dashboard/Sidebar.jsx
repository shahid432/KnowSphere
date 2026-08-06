import {
    LayoutDashboard,
    FileText,
    MessageSquare,
    Settings,
    LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import { NavLink } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    function handleLogout() {

        logout();

        navigate("/");

    }
    const menu = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard",
        },
        {
            name: "Documents",
            icon: FileText,
            path: "/documents",
        },
        {
            name: "AI Chat",
            icon: MessageSquare,
            path: "/chat",
        },
        {
            name: "Settings",
            icon: Settings,
            path: "/settings",
        },
    ];

    return (
        <aside className="w-64 bg-white shadow-lg flex flex-col">

            <div className="p-6 border-b">

                <h1 className="text-2xl font-bold text-blue-600">
                    🧠 KnowSphere
                </h1>

            </div>

            <nav className="flex-1 p-4">

                {
                    menu.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-lg px-4 py-3 mb-2 transition ${
                                        isActive
                                            ? "bg-blue-600 text-white"
                                            : "hover:bg-slate-100"
                                    }`
                                }
                            >

                                <Icon size={20} />

                                {item.name}

                            </NavLink>

                        );

                    })
                }

            </nav>

            <div className="p-4 border-t">

                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-red-50 text-red-600"
                >
                    <LogOut size={20} />

                    Logout
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;