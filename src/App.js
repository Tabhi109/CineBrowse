import React, {useEffect, useState} from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=488f1a41';


function App() {

  

  const [movies,setMovies] = useState([]);
  const [searchTerm ,setsearchTerm] = useState('');
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
      value={searchTerm}
      onChange={(e) => setsearchTerm(e.target.value)}
      />
      <img
      src={SearchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
      /> 
      </div> 
      {
        movies?.length > 0 
        ? (
            <div className="container">
            {movies.map((movie) => (
              <MovieCard movie = {movie} />
            ))}
            </div>
        ):
        (
          <div className="empty">
            No Match Found !
            </div>
        )
      }
    
    </div>
  );
}

export default App;