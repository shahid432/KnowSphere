import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem("accessToken");

        if (token) {

            setIsAuthenticated(true);

        }

        setLoading(false);

    }, []);

    function login(token) {

        localStorage.setItem(
            "accessToken",
            token
        );

        setIsAuthenticated(true);

    }

    function logout() {

        localStorage.removeItem(
            "accessToken"
        );

        setIsAuthenticated(false);

    }

    return (

        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                loading,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}