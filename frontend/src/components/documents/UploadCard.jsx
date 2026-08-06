import { useState } from "react";
import toast from "react-hot-toast";
import { UploadCloud, FileText } from "lucide-react";

import documentService from "../../services/documentService";

function UploadCard({ onUpload }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleUpload() {

        if (!file) {

            toast.error("Please select a PDF");

            return;

        }

        try {

            setLoading(true);

            await documentService.upload(file);

            toast.success("Document uploaded successfully 🎉");

            setFile(null);

            if (onUpload) onUpload();

        }

        catch (error) {

            toast.error(
                error.response?.data?.detail ||
                "Upload failed"
            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

            <div className="flex items-center gap-3 mb-6">

                <UploadCloud className="text-blue-600" size={32} />

                <div>

                    <h2 className="text-2xl font-bold text-slate-800">

                        Upload Documents

                    </h2>

                    <p className="text-slate-500">

                        PDF files only

                    </p>

                </div>

            </div>

            <label
                className="border-2 border-dashed border-blue-300 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
            >

                <FileText
                    size={45}
                    className="text-blue-600 mb-4"
                />

                <p className="font-semibold text-slate-700">

                    {file
                        ? file.name
                        : "Click here to choose a PDF"}

                </p>

                <p className="text-sm text-slate-400 mt-2">

                    Maximum supported: PDF

                </p>

                <input

                    hidden

                    type="file"

                    accept=".pdf"

                    onChange={(e) =>
                        setFile(e.target.files[0])
                    }

                />

            </label>

            <button

                onClick={handleUpload}

                disabled={loading}

                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl py-3 font-semibold disabled:opacity-50"

            >

                {

                    loading

                        ? "Uploading..."

                        : "Upload Document"

                }

            </button>

        </div>

    );

}

export default UploadCard;