import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../components/PrivateRoutes/AuthProvider'
import { Role } from '../models/AuthContextType'
import './Login.css'
const Login:React.FC = () => {
  const navigate=useNavigate()
  const {login}=useAuth();
  // const [role,setRole]=useState<Role>("")
  

  const handleClick=(role:Role)=>{
    // setRole(e.currentTarget.value as Role);
    login(role);
    if(role=='user'){
      navigate('/user');

    }
    else if(role=='admin'){
      navigate('/admin')
    }
    else{
      navigate('/')
    }

  }
  
  return (
    <div className=' loginDiv '>
      <div className='container d-flex flex-column align-items-center justify-content-center m-auto  text-center'>
      <h1> Welcome to CineTrack</h1>
      <div>
      <div className='d-flex mt-3 p-2'>
          <button onClick={()=>handleClick('user')} className='btn btn-primary m-2'  value='user'>Login as User</button>
          <button onClick={()=>handleClick('admin')} className='btn btn-secondary m-2' value='admin'>Login as Admin</button>
        
      </div>
      </div>
      </div>
    </div>
    
  )
}
export default Login
