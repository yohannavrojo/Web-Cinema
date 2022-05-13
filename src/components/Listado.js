import { Link } from "react-router-dom";
import {useEffect,useState} from "react"
import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Listado() {
 
  const token =localStorage.getItem('token');
 const [moviesList,setMoviesList]=useState([])
  useEffect(()=>{

  const endPonint='https://api.themoviedb.org/3/discover/movie?api_key=39589bbdbc401060bd0a0b0c42637834&language=es-ES&page=1'
  axios.get(endPonint)
  .then(response=>{
    const apiData= response.data;
    // cgl de apidata se convierte en la actualizacion del estado
    setMoviesList(apiData.results)
  })  

  .catch(error=>{
     swAlert(<h1>Tuvimos Errores, intenta mas tarde</h1>) 
 })
    
},[setMoviesList])




    return (
    <>
{/* {!token && <Link to="/"/> } */}
     {/* estructura basica */}
     <div className="row">
     {moviesList.map((oneMovie,idx)=>{
         return(
         
          <div className="col-3" key={idx}>
            <div className="card my-4">
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title}</h5>
                <p className="card-text">{oneMovie.overview.substring(0,100)} ... </p>
                <Link className="btn btn-primary" to="/">
                  View detail
                </Link>
              </div>
            </div>
          </div>
        
         )
       })
     }
     </div>
      
    
    </>
  );
}

export default Listado;
