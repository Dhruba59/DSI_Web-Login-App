import React, { useEffect, useState } from "react";
import app from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrUser(user)
      setLoading(false)
    });
  }, []);

  if(loading){
    return <>Loading...</>
  }

  return (
    <AuthContext.Provider
      value={{
        currUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
