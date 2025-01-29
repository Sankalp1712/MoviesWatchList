export type Role ='admin'|'user'|''
export interface AuthStatus {
    isLoggedIn:boolean,
    role:Role
}
export  interface AuthContextType{
    authStatus:AuthStatus,
    login:(role:Role)=>void,
    logout:()=>void
}