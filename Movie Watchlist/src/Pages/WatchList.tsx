import React, { useEffect, useState } from "react";
import { getData } from "../services/UserServices";
import Header from "../components/Header";
import { Movie } from "../models/Movie";
import WatchCard from "../components/WatchCard";
import { Link } from "react-router-dom";
const WatchList: React.FC = () => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        const res = await getData();
        setData(res);
      } catch (err) {
        console.error("Failed to fetch watchlist data:", err);
      }
    };

    fetchWatchList();
  }, []);

  if (data.length > 0) {
    return (
      <div>
        <div className="navContainer">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            {data &&
              data.length > 0 &&
              data.map((item: Movie) => (
                <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                  <WatchCard
                    id={item.id}
                    name={item.name}
                    about={item.about}
                    url={item.url}
                    rating={item.rating}
                    year={item.year}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="navContainer">
          <Header />
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "500px" }}
        >
          <h3>Watchlist is Empty go back to home to add movies</h3>
          <div className='btn btn-primary mt-3 '>
            <Link className='text-white' to="/user">Home</Link>
          </div>
        </div>
      </div>
    );
  }
};

export default WatchList;
