import React from 'react'
import { useParams } from "react-router-dom";

const MoviePage = () => {
    let params = useParams();
  return (
    <>
      return <h2>Invoice {params.invoiceId}</h2>;
    </>
  )
}

export default MoviePage;
