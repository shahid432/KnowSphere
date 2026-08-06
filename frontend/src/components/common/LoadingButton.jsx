function LoadingButton({
    children,
    loading,
    type = "submit",
}) {

    return (
        <button
            type={type}
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
            {
                loading
                    ? "Please wait..."
                    : children
            }
        </button>
    );
}

export default LoadingButton;