import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favoritos () {
const [favorites,setFavorites]=useState([])

useEffect(() =>{

    const favInLocal =  localStorage.getItem('favs')
    console.log(favInLocal)
    if (favInLocal != null) {
        const favsArray = JSON.parse(favInLocal)
        setFavorites(favsArray)
        console.log(favsArray)
    }
},[])



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

  return (
      <>
       <h2>Favoritos</h2>
       <div className="row">
     {favorites.map((oneMovie,idx)=>{
         return(
         
          <div className="col-3" key={idx}>
            <div className="card my-4">
              <img src={oneMovie.imgURL} className="card-img-top" alt="..." />
              <button className="favourite-btn" onClick={addOrRemoveFromFavs} 
              data-movie-id ={oneMovie.id}
              >🖤</button>
              <div className="card-body">
                <h5 className="card-title">{oneMovie.titulo}</h5>
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
   
  )
}

export default Favoritos