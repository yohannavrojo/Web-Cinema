import React from "react";
import { useEffect } from "react";

function Detalle() {
  let token =sessionStorage.getItem('token');

  let query = new URLSearchParams(window.location.search);
  let ID= query.get('ID');

  useEffect(() => {
    console.log(ID);
  }, [ID]);

  return (
    <>
      {/* {!token && <Link to="/"/> } */}
      <h1>Detalle de la pelicula</h1>
      <div className="row">
        <div className="col-4">imagen</div>
        <div className="col-8">
          <h2>Titulo:</h2>
          <h2>Fecha de Estreno:</h2>
          <h2>Reseña:</h2>
          <p>Duis cillum duis do do sint incididunt veniam et. Tempor aliqua proident est nisi ut id labore amet deserunt anim reprehenderit reprehenderit nisi non. Velit duis exercitation amet occaecat proident ex velit culpa sit nostrud ut esse voluptate.</p>
          <h2>Generos:</h2>
          <ul>
              <li>Genero:1</li>
              <li>Genero:2</li>
              <li>Genero:3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Detalle;
