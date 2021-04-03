import React from 'react';
import "./style.scss"
import H1 from "./components/H1"
import Header from "./components/Header"

const App = ({ title }) =>
  <>
  <Header />
      <div className="hellow">
      <H1 title="titre ok ok ok ok ok"/>
      {title}
    </div>
  </>;
 
export default App;
