import api from "./api";

const documentService = {

    async upload(file) {

        const formData = new FormData();

        formData.append(
            "file",
            file
        );

        const response = await api.post(
            "/api/v1/documents/upload",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;

    },

    async getAll() {

        const response = await api.get(
            "/api/v1/documents"
        );

        return response.data;

    },

    async delete(id) {

        const response = await api.delete(
            `/api/v1/documents/${id}`
        );

        return response.data;

    },

};

export default documentService;