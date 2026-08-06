import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import toast from "react-hot-toast";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import LoadingButton from "../common/LoadingButton";

import authService from "../../services/authService";

function RegisterForm() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        if (
            !form.full_name ||
            !form.email ||
            !form.password
        ) {

            toast.error("Please fill all fields.");

            return;

        }

        try {

            setLoading(true);

            const response = await authService.register(form);

            toast.success(

                response.message ||

                "Registration successful 🎉"

            );

            navigate("/");

        }

        catch (error) {

            toast.error(

                error.response?.data?.detail ||

                "Registration failed"

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

                    <UserPlus

                        size={55}

                        className="text-blue-600"

                    />

                </div>

                <h1 className="text-3xl font-bold text-slate-800">

                    Create Account

                </h1>

                <p className="text-slate-500 mt-2">

                    Join KnowSphere

                </p>

            </div>

            <form onSubmit={handleSubmit}>

                <AuthInput

                    label="Full Name"

                    name="full_name"

                    placeholder="Enter your full name"

                    value={form.full_name}

                    onChange={handleChange}

                />

                <AuthInput

                    label="Email"

                    name="email"

                    type="email"

                    placeholder="Enter your email"

                    value={form.email}

                    onChange={handleChange}

                />

                <PasswordInput

                    label="Password"

                    name="password"

                    placeholder="Create password"

                    value={form.password}

                    onChange={handleChange}

                />

                <LoadingButton

                    loading={loading}

                >

                    Register

                </LoadingButton>

            </form>

            <p className="text-center mt-6 text-slate-600">

                Already have an account?

                <Link

                    to="/"

                    className="ml-2 text-blue-600 font-semibold hover:underline"

                >

                    Login

                </Link>

            </p>

        </AuthCard>

    );

}

export default RegisterForm;