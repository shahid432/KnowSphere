import { useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";

import ChatInput from "../components/chat/ChatInput";
import ChatMessages from "../components/chat/ChatMessages";

import chatService from "../services/chatService";

function Chat() {

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);

    async function handleSend(question) {

        const userMessage = {

            role: "user",

            content: question,

        };

        setMessages((prev) => [

            ...prev,

            userMessage,

        ]);

        try {

            setLoading(true);

            const response = await chatService.ask(question);

            setMessages((prev) => [

                ...prev,

                {
                    role: "assistant",

                    content: response.answer,

                    sources: response.sources || [],

                },

            ]);

        }

        catch (error) {

            if (error.response?.status === 503) {

                toast.error(
                    "🤖 KnowSphere AI is busy. Please try again in a few seconds."
                );

            } else {

                toast.error(
                    error.response?.data?.detail || "Chat failed"
                );

            }

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <DashboardLayout>

            <PageHeader

                title="AI Chat"

                subtitle="Ask anything from your uploaded documents."

            />

            <ChatMessages

                messages={messages}

                loading={loading}

            />

            <ChatInput

                onSend={handleSend}

                loading={loading}

            />

        </DashboardLayout>

    );

}

export default Chat;