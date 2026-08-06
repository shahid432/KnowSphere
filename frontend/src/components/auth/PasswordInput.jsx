import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordInput({
    label,
    name,
    placeholder,
    value,
    onChange,
    error,
}) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-5">

            <label className="block mb-2 text-sm font-semibold text-slate-700">
                {label}
            </label>

            <div className="relative">

                <input
                    name={name}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full rounded-lg border px-4 py-3 pr-12 outline-none transition
                        ${
                            error
                                ? "border-red-500 focus:ring-2 focus:ring-red-500"
                                : "border-slate-300 focus:ring-2 focus:ring-blue-500"
                        }`}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 text-slate-500"
                >
                    {
                        showPassword
                            ? <EyeOff size={20}/>
                            : <Eye size={20}/>
                    }
                </button>

            </div>

            {
                error &&
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            }

        </div>
    );
}

export default PasswordInput;