import React, { useEffect, useState } from "react";
import { getData } from "../services/UserServices";
import Header from "../components/Header";
import { Movie } from "../models/Movie";
import WatchCard from "../components/WatchCard";

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
              <div key={item.id} className="col-12 col-md-6 col-lg-3">
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
};

export default WatchList;
