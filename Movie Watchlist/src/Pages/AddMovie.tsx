import React, { ChangeEvent, FormEvent, useState } from "react";
import { Movie } from "../models/Movie";
import { postData } from "../services/AdminServices";
import { useNavigate } from "react-router-dom";
import './AddMovie.css'
const AddMovie: React.FC = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState<Movie>({
    id: 0,
    name: "",
    rating: 0,
    about: "",
    year: 0,
    url: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formData)
    try{
      const res=await postData(formData)

      if(res) {
        alert('Movie Details Saved');
        navigate('/admin')
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="container mt-3">
      <h3>Add Movies</h3>
      <form onSubmit={handleSubmit} className="addMovies">
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input
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
export default AddMovie;
