import React, { ReactNode } from 'react'
import { useAuth } from './AuthProvider'
import {Navigate} from 'react-router-dom'
interface PrivateRouteProps{
  element:ReactNode,
  role:string
}
const PrivateRoutes:React.FC<PrivateRouteProps> = ({element,role}) => {
  const {authStatus}=useAuth();
  if(!authStatus.isLoggedIn || authStatus.role!=role){
      return <Navigate to ='/unauthorized'/>
  }
  return element
    

}
export default  PrivateRoutes