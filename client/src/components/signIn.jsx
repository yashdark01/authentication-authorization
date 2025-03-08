import React, { useState } from "react";
import axios from "axios";
import { server_url } from "../server/server.js";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            const response = await axios.post(`${server_url}/user/login`, { email, password });

            console.log("Server Response:", response.data);

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                console.log("Token Stored:", response.data.token);

                // ✅ Navigate to Home after login
                navigate("/"); 
            } else {
                setError("Login failed. No token received.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Invalid email or password. Try again!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign In</h2>
                
                {error && <p className="text-red-500 text-center">{error}</p>} {/* Show error message */}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};