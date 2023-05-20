import React, {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=488f1a41';


function App() {

  

  const [movies,setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
    
  },[]);
  return (
    <div className="app">
     <h1>CineBrowse</h1>
     <div className="search">
      <input 
      type=""
      placeholder="Search for Movies..."
      value="Spiderman"
      onChange={() => {}}
      />
      <img
      src={SearchIcon}
      alt="search"
      onClick={() => {}}
      /> 
      </div> 

    <div className="container">
      <MovieCard movie = {movie} />
    </div>
    </div>
  );
}

export default App;