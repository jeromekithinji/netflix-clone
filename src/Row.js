import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        console.log("Fetching data");
        fetch(
          `https://api.themoviedb.org/3${fetchUrl}`
        )
          .then((response) => response.json())
          .then((jsonResponse) => console.log(jsonResponse))
          .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, [])
    
  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Row