import { useState, useEffect } from 'react';
import axios from 'axios';
import { server_url } from '../server/server';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem("token");
            
                const response = await axios.get(`http://localhost:3002/api/auth/token/check`, {
                  headers: { Authorization: `Bearer ${token}` }, // Send token in headers
                });
            
                setLoading(false);
                console.log("Authenticated:", response.data);
              } catch (error) {
                setLoading(true);
                console.error("Not authenticated:", error.response?.data);
              }
        };

        checkAuth(); // ✅ Call the function

    }, []);

    return { isAuthenticated, loading };
};

export default useAuth;