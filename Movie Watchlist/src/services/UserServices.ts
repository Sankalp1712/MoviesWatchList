import axios from 'axios'
import { Movie } from '../models/Movie';
export const fetchData=async()=>{
    try{
        const res=await axios.get(`http://localhost:5000/movies`)
        return res.data
    }
    catch(err){
        console.log(err)
        return null
    }

    
}
export const getData=async()=>{
    try{
        const res=await axios.get('http://localhost:5000/watchlist/')
        return res.data;
    }
    catch(err){
        console.log(err)
        return null;
    }
}

export const deleteData=async(id:string|undefined)=>{
    try{
        const res=await axios.delete(`http://localhost:5000/watchlist/${id}`)
        return res.data;
    }
    catch(err){
        console.log(err)
        return null;
    }
}
export const getDataByID=async(id:string|void)=>{
    try{
        const res= await axios.get(`http://localhost:5000/movies/${id}`)
        return res.data;
    }
    catch(err){
        console.log(err)
        return null
    }
}
export const addData=async(item:Movie)=>{
    try{
        const res= await axios.post(`http://localhost:5000/watchlist/`,item)
        return res.data;
    }
    catch(err){
        console.log(err)
        return null
    }
}