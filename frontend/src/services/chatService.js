import api from "./api";

const chatService = {

    async ask(question) {

        const response = await api.post(
            "/api/v1/chat",
            {
                question,
            }
        );

        return response.data;

    },

};

export default chatService;