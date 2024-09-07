import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem('auth') === 'true';
        setIsAuthenticated(authStatus);
    }, []);

    return { isAuthenticated };
}