import { useState } from "react";

function ChatInput({

    onSend,

    loading,

}) {

    const [message, setMessage] = useState("");

    function submit(e) {

        e.preventDefault();

        if (!message.trim()) return;

        onSend(message);

        setMessage("");

    }

    return (

        <form
            onSubmit={submit}
            className="flex gap-4 mt-6"
        >

            <input

                value={message}

                onChange={(e) =>
                    setMessage(e.target.value)
                }

                placeholder="Ask anything..."

                className="flex-1 border rounded-lg px-4 py-3"

            />

        <button

            disabled={loading}

            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 rounded-lg disabled:opacity-50"

        >

            {

                loading

                    ?

                    "Thinking..."

                    :

                    "Send"

            }

        </button>

        </form>

    );

}

export default ChatInput;