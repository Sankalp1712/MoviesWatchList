import React from 'react'
import { useNavigate } from 'react-router-dom'
 const CreateButton:React.FC = () => {
    const navigate= useNavigate();
  return (
    <div>
        <button onClick={()=>{
            navigate('/admin/add');
        }}>Add</button>
    </div>
  )
}
export default CreateButton

