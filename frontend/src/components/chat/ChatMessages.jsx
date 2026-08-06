import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { FaUserCircle } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";

function ChatMessages({

    messages,

    loading,

}) {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth",

        });

    }, [messages, loading]);

    function copy(text) {

        navigator.clipboard.writeText(text);

        toast.success("Copied to clipboard");

    }

    return (

        <div className="bg-white rounded-xl shadow p-6 h-[550px] overflow-y-auto">

            {

                messages.length === 0 && !loading && (

                    <div className="h-full flex flex-col items-center justify-center text-slate-400">

                        <BsRobot className="text-6xl mb-4 text-blue-500" />

                        <h2 className="text-xl font-semibold">

                            Welcome to KnowSphere

                        </h2>

                        <p className="mt-2">

                            Ask anything from your uploaded documents.

                        </p>

                    </div>

                )

            }

            {

                messages.map((message, index) => (

                    <div

                        key={index}

                        className={`flex mb-6 ${
                            message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                        }`}

                    >

                        {

                            message.role === "assistant" && (

                                <BsRobot

                                    className="text-3xl mr-3 mt-2 text-blue-600 flex-shrink-0"

                                />

                            )

                        }

                        <div>

                            <div

                                className={`rounded-2xl px-5 py-4 shadow max-w-[700px] whitespace-pre-wrap break-words ${
                                    message.role === "user"
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-100 text-slate-800"
                                }`}

                            >

                                {

                                    message.role === "assistant"

                                        ? (

                                            <ReactMarkdown>

                                                {message.content}

                                            </ReactMarkdown>

                                        )

                                        : (

                                            message.content

                                        )

                                }

                            </div>

                            {

                                message.role === "assistant" && (

                                    <button

                                        onClick={() => copy(message.content)}

                                        className="flex items-center gap-2 mt-2 text-sm text-slate-500 hover:text-blue-600 transition"

                                    >

                                        <FiCopy />

                                        Copy

                                    </button>

                                )

                            }

                            {

                                message.role === "assistant" &&

                                message.sources?.length > 0 && (

                                    <div className="mt-4 border rounded-xl bg-slate-50 p-4">

                                        <h4 className="font-semibold text-slate-700 mb-3">

                                            📄 Sources Used

                                        </h4>

                                        <div className="space-y-3">

                                            {

                                                message.sources.map((source, index) => (

                                                    <div

                                                        key={index}

                                                        className="border rounded-lg bg-white p-3 text-sm text-slate-700"

                                                    >

                                                        {source}

                                                    </div>

                                                ))

                                            }

                                        </div>

                                    </div>

                                )

                            }

                        </div>

                        {

                            message.role === "user" && (

                                <FaUserCircle

                                    className="text-3xl ml-3 mt-2 text-blue-600 flex-shrink-0"

                                />

                            )

                        }

                    </div>

                ))

            }

            {

                loading && (

                    <div className="flex items-start gap-3">

                        <BsRobot className="text-3xl text-blue-600" />

                        <div className="bg-slate-100 rounded-2xl px-5 py-4 shadow">

                            <div className="flex gap-1">

                                <span className="animate-bounce">●</span>

                                <span className="animate-bounce delay-100">●</span>

                                <span className="animate-bounce delay-200">●</span>

                            </div>

                            <p className="mt-2 text-sm text-slate-600">

                                KnowSphere is thinking...

                            </p>

                        </div>

                    </div>

                )

            }

            <div ref={bottomRef}></div>

        </div>

    );

}

export default ChatMessages;