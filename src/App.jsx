
import './App.css'
import { NavBar } from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Templete } from './Components/Templete';
import { useState } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from "./Components/MovieDetails"

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Templete />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
