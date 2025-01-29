import React from 'react'
import { Movie } from '../models/Movie'
import { useNavigate } from 'react-router-dom'
import './Card.css'
const WatchCard:React.FC<Movie> = (props) => {
    const navigate=useNavigate()
  return (
    <div className="card movieCard bg-dark text-white" >
      <div className='imageContainer'>

      <img src={props.url} className="card-img-top" alt="..." />
      </div>
      <div className="card-body mt-3">
        <h5 className="card-title text-white">{props.name}</h5>
        <p>{props.year}</p>
        <p>About : {props.about}</p>
        <p ><span className='text-warning'>Imdb Rating</span> : {props.rating}</p>
        <div className="Container movieBtn ">
            <button onClick={()=> navigate(`/user/watchlist/delete/${props.id}`)}  className="btn btn-primary m-2">Delete</button>
        
        </div>
      </div>
    </div>
  )
}
export default WatchCard