import {
    Search,
    Bell,
    UserCircle2,
} from "lucide-react";

function Topbar() {

    return (

        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 py-5 flex items-center justify-between">

            <div>

                <h1 className="text-2xl font-bold text-slate-800">

                    🧠 KnowSphere

                </h1>

                <p className="text-sm text-slate-500 mt-1">

                    Enterprise Knowledge Assistant

                </p>

            </div>

            <div className="flex items-center gap-5">

                <div className="relative hidden md:block">

                    <Search
                        size={18}
                        className="absolute left-4 top-3 text-slate-400"
                    />

                    <input

                        type="text"

                        placeholder="Search documents..."

                        className="w-72 rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"

                    />

                </div>

                <button

                    className="relative rounded-xl bg-slate-100 p-3 hover:bg-slate-200 transition"

                >

                    <Bell size={20} />

                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

                </button>

                <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-2">

                    <UserCircle2
                        size={38}
                        className="text-blue-600"
                    />

                    <div className="hidden md:block">

                        <p className="font-semibold text-slate-800">

                            Welcome 👋

                        </p>

                        <p className="text-xs text-slate-500">

                            KnowSphere User

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Topbar;