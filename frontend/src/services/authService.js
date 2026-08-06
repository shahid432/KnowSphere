import api from "./api";

const authService = {

    async login(data) {

        const response = await api.post(
            "/api/v1/auth/login",
            data
        );

        return response.data;
    },

    async register(data) {

        const response = await api.post(
            "/api/v1/auth/register",
            data
        );

        return response.data;
    },

};

export default authService;