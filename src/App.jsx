import { useEffect, useState } from 'react'
import './App.css'
import Search_Icon from './assets/search.svg'
import MovieCard from './components/MovieCard'

const url = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`

function App() {
  const [movies, setmovies] = useState([])
  const [search ,setSearch] = useState("")

  const searchMovie = async(title) => {
    const response = await fetch(`${url}&s=${title}`)
    const data = await response.json()

    setmovies(data.Search)

  }
    useEffect(()=>{
      searchMovie("Batman")
    },[])
  
  return (
    <>
     <div className="app">
      <h1>MovieSpace</h1>
      <div className="search">
        <input type="text" placeholder='search for movies' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <img src={Search_Icon} alt="search" onClick={()=> searchMovie(search)} />
      </div>

      {movies?.length>0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
      
     </div>
    </>
  )
}

export default App
