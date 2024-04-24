
import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Templete } from './Components/Templete';
import { useEffect } from 'react';
import { useState } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from "./Components/MovieDetails"
function App() {
  const [pages, setpages] = useState(0);
  const [Movies, setMovies] = useState([]);
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&api_key=672f841ce52924fc968056c4fef4e4d8&page=1&sort_by=popularity.desc%27")
    setMovies(res.data.results)
    setpages(res.data.total_pages);

  }

  const search = async (word) => {
    if (word != "") {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=672f841ce52924fc968056c4fef4e4d8&query=${word}&language=ar`)
      setMovies(res.data.results)
      setpages(res.data.total_pages);
    } else {
      getAllMovies()
    }
  }
  useEffect(() => {
    getAllMovies()
  }, [])
  return (
    <>
      <NavBar search={search} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Templete Movies={Movies} setMovies={setMovies} pages={pages} />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
