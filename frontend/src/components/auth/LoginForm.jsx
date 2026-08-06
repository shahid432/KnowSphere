import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import toast from "react-hot-toast";

import AuthCard from "./AuthCard";
import authService from "../../services/authService";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import LoadingButton from "../common/LoadingButton";


import { validateLogin } from "../../utils/validators";

function LoginForm() {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { login } = useAuth();

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        const validation = validateLogin(form);

        if (Object.keys(validation).length > 0) {

            setErrors(validation);

            return;
        }

        try {

            setLoading(true);

            const response = await authService.login(form);

            login(response.access_token);

            toast.success("Login successful 🎉");

            navigate("/dashboard");

            console.log(response);

            // Dashboard redirect in next step

        }

        catch (error) {

            toast.error(

                error.response?.data?.detail ||

                "Login failed"

            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <AuthCard>

            <div className="text-center mb-8">

                <div className="flex justify-center mb-4">

                    <BookOpen
                        size={55}
                        className="text-blue-600"
                    />

                </div>

                <h1 className="text-3xl font-bold text-slate-800">

                    KnowSphere

                </h1>

                <p className="text-slate-500 mt-2">

                    Enterprise Knowledge Assistant

                </p>

            </div>

            <form onSubmit={handleSubmit}>

                <AuthInput

                    label="Email"

                    name="email"

                    type="email"

                    placeholder="Enter your email"

                    value={form.email}

                    onChange={handleChange}

                    error={errors.email}

                />

                <PasswordInput

                    label="Password"

                    name="password"

                    placeholder="Enter password"

                    value={form.password}

                    onChange={handleChange}

                    error={errors.password}

                />

                <LoadingButton

                    loading={loading}

                >

                    Login

                </LoadingButton>

            </form>

            <p className="text-center mt-6 text-slate-600">

                Don't have an account?

                <Link

                    to="/register"

                    className="ml-2 text-blue-600 font-semibold hover:underline"

                >

                    Register

                </Link>

            </p>

        </AuthCard>

    );

}

export default LoginForm;