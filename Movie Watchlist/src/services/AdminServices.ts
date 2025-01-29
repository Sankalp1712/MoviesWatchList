import axios from 'axios'
import { Movie } from '../models/Movie'
export const fetchData=async(id:string|void)=>{
    try{
        let data:Movie[] |Movie;
        if(id){
            const res=await axios.get(`http://localhost:5000/movies/${id}`)
            data=res.data

        }
        else{
            const res=await axios.get(`http://localhost:5000/movies`)
            data=res.data
        }

        return data
    }
    catch(err){
        console.log(err)
        return null
    }

    
}
export const postData=async(item:Movie)=>{
    try{
        const res=await axios.post('http://localhost:5000/movies',item)
        
        return res.data;
    }catch(err){
        console.log(err)
        return null;
    }
}
export const putData=async(item:Movie)=>{
    try{
        const res=await axios.put(`http://localhost:5000/movies/${item.id}`,item)
        // console.log(res.data)
        return res.data;
    }catch(err){
        console.log(err)
        return null;
    }
}
export const deleteData=async(id:string|undefined)=>{
    try{
        if(id){
            if(id.length>0){
                const res=await axios.delete(`http://localhost:5000/movies/${id}`)

                return res.data;
            }

        }
        // console.log(res.data)
    }catch(err){
        console.log(err)
        return null;
    }
}