import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import { fetchData } from '../services/UserServices'
import { Movie } from '../models/Movie'
const User:React.FC = () => {
    const [data,setData]=useState<Movie[]>([]);
    useEffect(()=>{
        const fetchMovies=async()=>{
            try{
                const res=await fetchData();
                
                if(res && Array.isArray(res)){  
                    setData(res)
                }
            }catch(err){
                console.log(err)
            }
            
        }
        fetchMovies()
    },[])
  return (
   <>
   
   <Body props={data}  />

   </>
  )
}
export default User
