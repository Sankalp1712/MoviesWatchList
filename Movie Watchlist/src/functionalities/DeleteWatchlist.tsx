import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { deleteData } from '../services/UserServices';
import { useNavigate } from 'react-router-dom';

const DeleteWatchlist:React.FC = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
         const deleteWatchlist=async()=>{
            try{
                await deleteData(id);
                navigate('/user/watchlist')
            }catch(err){
                console.log(err);

            }
         }
         deleteWatchlist()
    },[id,navigate])
  return (
    <div>DeleteWatchlist</div>
  )
}
export default DeleteWatchlist
