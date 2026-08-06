import { Link } from "react-router-dom";
import {
    Bot,
    FileText,
    UploadCloud,
    MessageSquare,
    ArrowRight,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

function Dashboard() {

    const cards = [
        {
            title: "Upload Documents",
            description: "Add PDFs to your knowledge base.",
            icon: UploadCloud,
            color: "bg-blue-600",
            link: "/documents",
            button: "Upload PDF",
        },
        {
            title: "AI Chat",
            description: "Ask questions from uploaded documents.",
            icon: MessageSquare,
            color: "bg-violet-600",
            link: "/chat",
            button: "Start Chat",
        },
    ];

    return (

        <DashboardLayout>

            <PageHeader
                title="Dashboard"
                subtitle="Welcome to your AI-powered knowledge workspace."
            />

            <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-10 text-white shadow-xl">

                <div className="flex items-center gap-5">

                    <div className="rounded-2xl bg-white/20 p-5">

                        <Bot size={55} />

                    </div>

                    <div>

                        <h1 className="text-4xl font-bold">

                            Welcome to KnowSphere

                        </h1>

                        <p className="mt-3 text-blue-100 text-lg">

                            Upload documents, search intelligently and chat
                            with your knowledge base using AI.

                        </p>

                    </div>

                </div>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

                {

                    cards.map((card) => {

                        const Icon = card.icon;

                        return (

                            <div
                                key={card.title}
                                className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 hover:shadow-2xl transition"
                            >

                                <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}>

                                    <Icon size={34} />

                                </div>

                                <h2 className="mt-6 text-2xl font-bold">

                                    {card.title}

                                </h2>

                                <p className="mt-3 text-slate-500">

                                    {card.description}

                                </p>

                                <Link
                                    to={card.link}
                                    className="mt-8 inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-black transition"
                                >

                                    {card.button}

                                    <ArrowRight size={18} />

                                </Link>

                            </div>

                        );

                    })

                }

            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

                <div className="bg-white rounded-2xl shadow p-6">

                    <FileText
                        className="text-blue-600"
                        size={34}
                    />

                    <h2 className="mt-5 text-2xl font-bold">

                        PDF Knowledge Base

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Store and manage enterprise documents.

                    </p>

                </div>

                <div className="bg-white rounded-2xl shadow p-6">

                    <Bot
                        className="text-violet-600"
                        size={34}
                    />

                    <h2 className="mt-5 text-2xl font-bold">

                        Local RAG

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Semantic search powered by Milvus.

                    </p>

                </div>

                <div className="bg-white rounded-2xl shadow p-6">

                    <MessageSquare
                        className="text-green-600"
                        size={34}
                    />

                    <h2 className="mt-5 text-2xl font-bold">

                        Groq AI

                    </h2>

                    <p className="text-slate-500 mt-2">

                        Fast AI responses from your documents.

                    </p>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;