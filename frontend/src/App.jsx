import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Documents from "./pages/Documents";
import Settings from "./pages/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

    const { isAuthenticated } = useAuth();

    return (

        <BrowserRouter>

            <Routes>

                <Route

                    path="/"

                    element={

                        isAuthenticated

                            ? <Navigate to="/dashboard" />

                            : <Login />

                    }

                />

                <Route

                    path="/register"

                    element={

                        isAuthenticated

                            ? <Navigate to="/dashboard" />

                            : <Register />

                    }

                />

                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/chat"

                    element={

                        <ProtectedRoute>

                            <Chat />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="*"

                    element={<NotFound />}

                />

                <Route

                    path="/documents"

                    element={

                        <ProtectedRoute>

                            <Documents />

                        </ProtectedRoute>

                    }

                />

                <Route

                    path="/settings"

                    element={<Settings />}

                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;