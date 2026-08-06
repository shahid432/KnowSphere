import { FileText } from "lucide-react";

function EmptyState({

    title,

    description,

}) {

    return (

        <div className="bg-white rounded-xl shadow p-10 text-center">

            <FileText
                size={60}
                className="mx-auto text-slate-300 mb-4"
            />

            <h2 className="text-xl font-semibold">

                {title}

            </h2>

            <p className="mt-2 text-slate-500">

                {description}

            </p>

        </div>

    );

}

export default EmptyState;