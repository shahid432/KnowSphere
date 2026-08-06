import EmptyState from "../common/EmptyState";

function RecentDocuments() {

    return (

        <div className="mt-8">

            <EmptyState

                title="No documents uploaded"

                description="Upload your first PDF to start chatting with AI."

            />

        </div>

    );

}

export default RecentDocuments;