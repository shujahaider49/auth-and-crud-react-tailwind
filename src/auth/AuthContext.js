import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    useEffect(() => {
        const authCheck = localStorage.getItem('auth');
        if (authCheck) {
            setAuth(JSON.parse(authCheck))
        }
    }, [])


    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = () => useContext(AuthContext);
