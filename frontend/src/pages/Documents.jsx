import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import PageHeader from "../components/common/PageHeader";
import UploadCard from "../components/documents/UploadCard";
import DocumentTable from "../components/documents/DocumentTable";

import documentService from "../services/documentService";

function Documents() {

    const [documents, setDocuments] = useState([]);

    async function loadDocuments() {

        try {

            const data = await documentService.getAll();

            setDocuments(data);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load documents");

        }

    }

    useEffect(() => {

        loadDocuments();

    }, []);

    async function handleDelete(id) {

        try {

            await documentService.delete(id);

            toast.success("Document deleted");

            loadDocuments();

        } catch (error) {

            console.error(error);

            toast.error("Delete failed");

        }

    }

    return (

        <DashboardLayout>

            <PageHeader
                title="Documents"
                subtitle="Upload your PDFs"
            />

            <UploadCard onUpload={loadDocuments} />

            <div className="mt-8">

                <DocumentTable
                    documents={documents}
                    onDelete={handleDelete}
                />

            </div>

        </DashboardLayout>

    );

}

export default Documents;