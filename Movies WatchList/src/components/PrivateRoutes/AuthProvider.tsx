// import React, { createContext, ReactNode, useState, useContext } from 'react';
// import AuthContextType from '../../models/AuthContextType';

// const initialState: AuthContextType = {
//   role:"",
//   loginStatus: false,  // Rename isLoggedIn to loginStatus for consistency
//   login: () => {},
//   logout: () => {},
// };

// const userContext = createContext<AuthContextType>(initialState);

// export const useAuthContext = () => {
//   const context = useContext(userContext);
//   if (!context) {
//     throw new Error('useAuthContext must be used within a AuthContextProvider');
//   }
//   return context;
// };

// const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [loginStatus, setLoginStatus] = useState<boolean>(false);
//   const [role, setRole] = useState<"admin" | "user" | "">("");

//   const login = (role: "admin" | "user" | "") => {
//     setLoginStatus(true);
//     setRole(role);
//   };

//   const logout = () => {
//     setLoginStatus(false);
//     setRole("");
//   };

//   return (
//     <userContext.Provider value={{ role, loginStatus, logout,login }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export default AuthProvider;
import React, { createContext, ReactNode, useContext, useState } from 'react'
import {AuthContextType,AuthStatus,Role} from '../../models/AuthContextType'

const AuthContext=createContext<AuthContextType | undefined>(undefined);
export const useAuth=()=>{
  const context=useContext(AuthContext);
  if(!context) throw new Error("No Context Found...")
  return context;
}
 const AuthProvider:React.FC<{children:ReactNode}> = ({children}) => {
  const [authStatus,setAuthStatus]=useState<AuthStatus>({
    isLoggedIn:false,
    role:""
  })
  const login=(role:Role)=>{
    setAuthStatus({isLoggedIn:true,role:role});
  }
  const logout=()=>{
    setAuthStatus({isLoggedIn:false,role:""})
  }
  return (
    <AuthContext.Provider value={{authStatus,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
