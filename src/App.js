import React from 'react';
import "./style.scss"
import H1 from "./components/H1"
import Header from "./components/Header"
import HomePage from './containers/HomePage';


const App = ({ title }) =>
  <>
    <Header />
    <div className="hellow">
      <H1 title="titre ok ok ok ok ok"/>
      {title}
    </div>
    <HomePage />
  </>;
 
export default App;
