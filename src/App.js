import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import { MovieCard } from './MovieCard';

function App() {

  const [movies, setMovies] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");


  const API_URL = 'http://www.omdbapi.com?apikey=2db76a12';
  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search)

  }
  const movie1 = {
    
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
  }

  useEffect(() =>{
    searchMovies('batman');
  },[])

  return (
    <div className="app">
     <h1>Movie shop</h1>
      <div className='search'>
        <input type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder='search for a movie...'/>
        <img src={SearchIcon} 
        onClick={() => searchMovies(searchTerm)}
        alt='searchicon'/>
      </div>
      {
        movies?.length > 0
        ? (
        <div className='container'>
          {
            movies.map((movie) => (
              <MovieCard movie={movie}/>

            ))}
        </div>

        ) : (
          <div className='empty'>
            <h2>Movie not Found</h2>
          </div>
        )
      }
      

    </div>
    
  );
}

export default App;
