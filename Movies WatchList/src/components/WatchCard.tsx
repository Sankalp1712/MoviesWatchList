import React from 'react'
import { Movie } from '../models/Movie'
import { useNavigate } from 'react-router-dom'
import './Card.css'
const WatchCard:React.FC<Movie> = (props) => {
    const navigate=useNavigate()
  return (
    <div className="card movieCard" >
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p>{props.year}</p>
        <p>{props.about}</p>
        <p>Imdb Rating : {props.rating}</p>
        <div className="Container movieBtn ">
            <button onClick={()=> navigate(`/user/watchlist/delete/${props.id}`)}  className="btn btn-primary m-2">Delete</button>
        
        </div>
      </div>
    </div>
  )
}
export default WatchCard