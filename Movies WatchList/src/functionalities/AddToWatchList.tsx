import React, { useEffect, useState } from 'react';
import { getDataByID, addData } from '../services/UserServices';
import { useNavigate, useParams } from 'react-router-dom';
import { Movie } from '../models/Movie';

const WatchList: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<Movie | null>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await getDataByID(id);
          setData(res);
        } catch (err) {
          console.error('Error fetching data:', err);
        }
      }
    };
    fetchData();
  }, [id]);

 
  useEffect(() => {
    const addToWatchList = async () => {
      if (data) {
        try {
          await addData(data);
          navigate('/user/watchlist'); 
        } catch (err) {
          console.error('Error adding data to watchlist:', err);
        }
      }
    };
    addToWatchList();
  }, [data, navigate]);

  return <></>;
};

export default WatchList;
