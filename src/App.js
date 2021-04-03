import React from 'react';
import "./style.scss"
import H1 from "./components/H1"
import Header from "./components/Header"
import MoviesList from "./components/MoviesList"


const App = ({ title }) =>
  <>
    <Header />
    <div className="hellow">
      <H1 title="titre ok ok ok ok ok"/>
      {title}
    </div>
    <MoviesList />
  </>;
 
export default App;
