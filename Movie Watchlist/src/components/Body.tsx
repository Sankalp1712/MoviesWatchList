import React from "react";
import { Movie } from "../models/Movie";
import Card from "./Card";
import Header from "./Header";

const Body: React.FC<{ props: Movie[] }> = ({ props }) => {
  return (
    <>
      <div className='navContainer '>
        <Header/>
      </div>
      <div className="container">
        <div className="row g-3">
          {props.length > 0 &&
            props.map((item) => (
              <div key={item.id} className="col-12 col-lg-4 col-sm-6 ">
                <Card
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
    </>
  );
};
export default Body;
