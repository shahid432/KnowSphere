import {
    User,
    Shield,
    Palette,
    Info,
    Mail,
    Lock,
    Monitor,
    Cpu,
    Database,
    Bot,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

function Settings() {

    return (

        <DashboardLayout>

            <PageHeader
                title="Settings"
                subtitle="Manage your KnowSphere account and application."
            />

            <div className="grid gap-8">

                {/* Profile */}

                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

                    <div className="flex items-center gap-3 mb-6">

                        <User className="text-blue-600" size={28} />

                        <h2 className="text-2xl font-bold">

                            Profile

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>

                            <label className="text-sm text-slate-500">

                                Name

                            </label>

                            <div className="mt-2 rounded-xl bg-slate-100 p-4 font-medium">

                                KnowSphere User

                            </div>

                        </div>

                        <div>

                            <label className="text-sm text-slate-500">

                                Email

                            </label>

                            <div className="mt-2 rounded-xl bg-slate-100 p-4 flex items-center gap-3">

                                <Mail size={18} />

                                user@example.com

                            </div>

                        </div>

                    </div>

                </div>

                {/* Security */}

                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

                    <div className="flex items-center gap-3 mb-6">

                        <Shield className="text-green-600" size={28} />

                        <h2 className="text-2xl font-bold">

                            Security

                        </h2>

                    </div>

                    <button
                        disabled
                        className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl opacity-70 cursor-not-allowed"
                    >

                        <Lock size={18} />

                        Change Password (Coming Soon)

                    </button>

                </div>

                {/* Appearance */}

                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

                    <div className="flex items-center gap-3 mb-6">

                        <Palette className="text-violet-600" size={28} />

                        <h2 className="text-2xl font-bold">

                            Appearance

                        </h2>

                    </div>

                    <div className="flex items-center gap-3 bg-slate-100 rounded-xl p-4">

                        <Monitor size={22} />

                        <span>

                            Light Theme (Coming Soon)

                        </span>

                    </div>

                </div>

                {/* About */}

                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-2xl shadow-xl p-8 text-white">

                    <div className="flex items-center gap-3 mb-6">

                        <Info size={30} />

                        <h2 className="text-2xl font-bold">

                            About KnowSphere

                        </h2>

                    </div>

                    <p className="text-blue-100">

                        KnowSphere is an AI-powered Enterprise Knowledge
                        Assistant built using Retrieval-Augmented Generation
                        (RAG). Upload your documents and ask questions in
                        natural language.

                    </p>

                    <div className="grid md:grid-cols-4 gap-4 mt-8">

                        <div className="bg-white/10 rounded-xl p-5 text-center">

                            <Cpu
                                size={30}
                                className="mx-auto mb-2"
                            />

                            <p className="font-semibold">

                                FastAPI

                            </p>

                        </div>

                        <div className="bg-white/10 rounded-xl p-5 text-center">

                            <Database
                                size={30}
                                className="mx-auto mb-2"
                            />

                            <p className="font-semibold">

                                Milvus

                            </p>

                        </div>

                        <div className="bg-white/10 rounded-xl p-5 text-center">

                            <Bot
                                size={30}
                                className="mx-auto mb-2"
                            />

                            <p className="font-semibold">

                                Groq AI

                            </p>

                        </div>

                        <div className="bg-white/10 rounded-xl p-5 text-center">

                            🧠

                            <p className="font-semibold mt-2">

                                RAG

                            </p>

                        </div>

                    </div>

                    <div className="mt-8 text-sm text-blue-100">

                        Version 1.0.0

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Settings;