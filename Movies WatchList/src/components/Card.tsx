import React from "react";
import { Movie } from "../models/Movie";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./PrivateRoutes/AuthProvider";
import './Card.css'
const Card: React.FC<Movie> = (props) => {
  const navigate=useNavigate();
  const {authStatus} =useAuth();
  return (    
    <div className="card movieCard" >
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p>{props.year}</p>
        <p>{props.about}</p>
        <p>Imdb Rating : {props.rating}</p>
        <div className="Container movieBtn ">
          
          {
            authStatus.role=='admin' && (
              <>
              <button onClick={()=> navigate(`/admin/delete/${props.id}`)} className="btn btn-primary m-2">Delete</button>
              <button onClick={()=> navigate(`/admin/update/${props.id}`)} className='btn btn-primary m-2'>Modify</button>
              </>
            )
          }
          {authStatus.role=='user' &&
            (<button onClick={()=> navigate(`/user/add/${props.id}`) } className='btn btn-primary m-2'>Add</button>) 

          }
        
        </div>
      </div>
    </div>
  );
};
export default Card;
