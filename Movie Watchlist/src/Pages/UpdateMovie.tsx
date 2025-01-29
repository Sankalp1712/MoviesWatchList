import React, { ChangeEvent, useState,useEffect, FormEvent } from "react";
import { Movie } from "../models/Movie";
import { putData } from "../services/AdminServices";
import { useNavigate,useParams } from "react-router-dom";
import { fetchData } from "../services/AdminServices";
// import { Movie } from "../models/Movie";
import './UpdateMovies.css'
const UpdateMovie: React.FC = () => {
    const {id}=useParams();
    const [formData, setFormData] = useState<Movie>({
        id: 0,
        name: "",
        rating: 0,
        about: "",
        year: 0,
        url: "",
      });

    useEffect(()=>{
        const fetchMovie=async()=>{
            if(id){
                const movie=await fetchData(id)
                if(movie && !Array.isArray(movie)) {
                    setFormData(movie);
                    console.log(movie)
                }
            }

        }
        fetchMovie()
    },[id])
  const navigate=useNavigate();
  
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formData)
    try{
      const res=await putData(formData)
        console.log(res +" this is putData") ;
        if(res){
            alert('Movie Details Updated')
            navigate('/admin')
        }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="container mt-3">
      <h3>Update Details</h3>
      <form onSubmit={handleSubmit} className="updateForm">
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input disabled
            type="number"
            className="form-control form-text-input"
            name="id"
            onChange={handleChange}
            value={formData.id}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Movie Name</label>
          <input
            type="text"
            className="form-control form-text-input"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-number-input form-control"
            name="year"
            onChange={handleChange}
            value={formData.year}
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label">Rating</label>
          <input
            type="number"
            className=" form-control form-number-input"
            name="rating"
            onChange={handleChange}
            value={formData.rating}
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label ">URL for Image</label>
          <input
            type="text"
            className="form-text-input form-control"
            name="url"
            onChange={handleChange}
            value={formData.url}
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label ">About</label>
          <textarea
            name="about"
            className="form-control"
            id=""
            onChange={handleChange}
            value={formData.about}
          >
            Write here about movie ...
          </textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default UpdateMovie;
