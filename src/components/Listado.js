import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
  const navegacion = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token === null) {
      navegacion("/");
    }
  }, []);

  return (
    // estructura basica 
    <div className="row">
      <div className="col-3" >
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Movie title</h5>
            <p classNamde="card-text">
             Description
            </p>
        <Link className="btn btn-primary" to="/">View detail</Link>
          </div>
        </div>
      </div>
      {/* prodriamos agregar otra carta  */}
    </div>
    
    
  );
}

export default Listado;
