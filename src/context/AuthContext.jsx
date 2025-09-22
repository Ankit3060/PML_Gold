import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isMpinSet, setIsMpinSet] = useState(false);

    const value = useMemo(() => ({ isLogin, setIsLogin, isMpinSet, setIsMpinSet }), [isLogin, isMpinSet]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
