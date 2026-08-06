function AuthInput({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
}) {
    return (
        <div className="mb-5">

            <label className="block mb-2 text-sm font-semibold text-slate-700">
                {label}
            </label>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full rounded-lg border px-4 py-3 outline-none transition
                    ${
                        error
                            ? "border-red-500 focus:ring-2 focus:ring-red-500"
                            : "border-slate-300 focus:ring-2 focus:ring-blue-500"
                    }`}
            />

            {
                error &&
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            }

        </div>
    );
}

export default AuthInput;