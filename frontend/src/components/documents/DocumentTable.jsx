import { FileText, Trash2 } from "lucide-react";

function formatBytes(bytes) {

    if (bytes === 0) return "0 Bytes";

    const k = 1024;

    const sizes = [

        "Bytes",

        "KB",

        "MB",

        "GB"

    ];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (

        parseFloat(

            (bytes / Math.pow(k, i)).toFixed(2)

        ) +

        " " +

        sizes[i]

    );

}

function DocumentTable({

    documents,

    onDelete,

}) {

    if (documents.length === 0) {

        return (

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-16 text-center">

                <FileText

                    size={60}

                    className="mx-auto text-slate-300 mb-4"

                />

                <h2 className="text-xl font-bold text-slate-700">

                    No Documents

                </h2>

                <p className="text-slate-500 mt-2">

                    Upload your first PDF to start chatting.

                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="text-left px-6 py-4">

                            File

                        </th>

                        <th className="text-left px-6 py-4">

                            Size

                        </th>

                        <th className="text-left px-6 py-4">

                            Chunks

                        </th>

                        <th className="text-center px-6 py-4">

                            Action

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        documents.map((doc) => (

                            <tr

                                key={doc.id}

                                className="border-t hover:bg-slate-50 transition"

                            >

                                <td className="px-6 py-5 flex items-center gap-3">

                                    <FileText

                                        className="text-blue-600"

                                        size={22}

                                    />

                                    <span className="font-medium">

                                        {doc.original_filename}

                                    </span>

                                </td>

                                <td className="px-6">

                                    {formatBytes(doc.file_size)}

                                </td>

                                <td className="px-6">

                                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">

                                        {doc.total_chunks}

                                    </span>

                                </td>

                                <td className="px-6 text-center">

                                    <button

                                        onClick={() => onDelete(doc.id)}

                                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"

                                    >

                                        <Trash2 size={18} />

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default DocumentTable;