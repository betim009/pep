import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center"> 
      <h1 className="mt-5 mb-5">Página Incial / Home Page</h1>
      <button className="btn mt-2">
        <Link to="/prontuario">Preencher prontuário</Link>
      </button>
      <button className="btn mt-2">
        <Link to="/resultados">Ver resultados</Link>
      </button>
    </div>
  );
}

export default Home;
