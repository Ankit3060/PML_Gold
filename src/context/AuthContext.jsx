import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isMpinSet, setIsMpinSet] = useState(false);
  const [username, setUsername] = useState("");

  const logout = () => {
    setIsLogin(false);
    setIsMpinSet(false);
    setUsername("");
    localStorage.removeItem("userPin");
  };

  const value = useMemo(
    () => ({ isLogin, setIsLogin, isMpinSet, setIsMpinSet, username, setUsername, logout }),
    [isLogin, isMpinSet, username]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
