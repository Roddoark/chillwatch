import React from 'react';
import "./style.scss"
import H1 from "./components/H1/h1"

const App = ({ title }) =>
  <div className="hellow">
    <H1 />
    {title}
  </div>;
 
export default App;
