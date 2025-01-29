import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../models/Movie";
import Header from "../components/Header";
import Card from "../components/Card";
import { fetchData } from "../services/AdminServices";
import CreateButton from "../components/CreateButton";
import Body from "../components/Body";

const Admin: React.FC = () => {
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetchData();
      console.log(res);
      if (res && Array.isArray(res)) setData(res);
    };
    fetchMovies();
  }, []);
  // console.log(data);
  return (
    <div className="">
   
      
      <Body props={data}/>
      
     
    </div>
  );
};
export default Admin;
