import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.scss"
import H1 from "./components/H1"
import Header from "./components/Header"
import HomePage from './containers/HomePage';
import MoviePage from './containers/MoviePage';


const App = ({ title }) =>
  <BrowserRouter>
    <Header />
    <div className="hellow">
      <H1 title="titre ok ok ok ok ok"/>
      {/*{title}*/}
    </div>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="moviePage" element={<MoviePage />} />
    </Routes>
    </BrowserRouter>;

export default App;
