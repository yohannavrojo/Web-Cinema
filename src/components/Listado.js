import { Link } from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Listado() {
  
  const addOrRemoveFromFavs = e =>{

    const favMovies =  localStorage.getItem('favs')

    let tempMoviesFavs;
 
    if(favMovies === null){
       tempMoviesFavs = []
 
    }else{
 tempMoviesFavs = JSON.parse(favMovies)
    }
 console.log(
   tempMoviesFavs
 )


    const btn = e.currentTarget;
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const titulo = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
   
    const movieData = {
      imgURL,titulo,overview,
      id : btn.dataset['movieId']
    }
    
    let movieInArray = tempMoviesFavs.find(oneMovie =>{
      return oneMovie.id === movieData.id
    })
   if (!movieInArray) {
      
       tempMoviesFavs.push(movieData)
   localStorage.setItem('favs', JSON.stringify(tempMoviesFavs))
   console.log('Se Agrego la pelicula')
  
  }else{
    let movieLeft = tempMoviesFavs.filter(oneMovie => {
      return oneMovie.id !== movieData.id
    })
    localStorage.setItem('favs', JSON.stringify(movieLeft))
    console.log('Se Elimino la pelicula')
  }
   
  }


  
  let token =sessionStorage.getItem('token');
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
{!token && <Link to="/"/> }
     {/* estructura basica */}
     <div className="row">
     {moviesList.map((oneMovie,idx)=>{
         return(
         
          <div className="col-3" key={idx}>
            <div className="card my-4">
              <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..." />
              <button className="favourite-btn" onClick={addOrRemoveFromFavs} 
              data-movie-id ={oneMovie.id}
              >🖤</button>
              <div className="card-body">
                <h5 className="card-title">{oneMovie.title}</h5>
                <p className="card-text">{oneMovie.overview.substring(0,100)} ... </p>
                <Link to={`/detalle?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
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
