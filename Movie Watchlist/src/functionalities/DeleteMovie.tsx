import React ,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { deleteData } from '../services/AdminServices'
 const DeleteMovie:React.FC = () => {
    const {id}=useParams()
    console.log(id)
    const [deleting,setDeleteing]=useState(true);
    const navigate=useNavigate()
    useEffect(()=>{
        console.log('useeffect')
        const deleteMovie=async()=>{
            try{
                const res=await deleteData(id)
                
                if(res){
                    alert('Movie Deleted From WatchList')
                    setDeleteing(false)
                    navigate('/admin') 
                }
            }catch(err) {
                console.log(err);
            }
        }
        deleteMovie()
    },[id])
  return (
    <>
    {deleting && (<h1>Deleting ...</h1>)}
    </>
  )
}
export default DeleteMovie
