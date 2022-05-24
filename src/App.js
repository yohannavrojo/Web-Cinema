import {Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle"
import Resultados from "./components/Resultados";
import Favoritos from "./components/Favoritos";
//styles

import "./components/CSS/bootstrap.min.css";
import "./components/CSS/app.css"



function App() {

//   const addOrRemoveFromFavs = e =>{

//     const favMovies =  localStorage.getItem('favs')

//     let tempMoviesFavs;
 
//     if(favMovies === null){
//        tempMoviesFavs = []
 
//     }else{
//  tempMoviesFavs = JSON.parse(favMovies)
//     }
//  console.log(
//    tempMoviesFavs
//  )


//     const btn = e.currentTarget;
//     const parent = btn.parentElement
//     const imgURL = parent.querySelector('img').getAttribute('src')
//     const titulo = parent.querySelector('h5').innerText;
//     const overview = parent.querySelector('p').innerText;
   
//     const movieData = {
//       imgURL,titulo,overview,
//       id : btn.dataset['movieId']
//     }
    
//     let movieInArray = tempMoviesFavs.find(oneMovie =>{
//       return oneMovie.id === movieData.id
//     })
//    if (!movieInArray) {
      
//        tempMoviesFavs.push(movieData)
//    localStorage.setItem('favs', JSON.stringify(tempMoviesFavs))
//    console.log('Se Agrego la pelicula')
  
//   }else{
//     let movieLeft = tempMoviesFavs.filter(oneMovie => {
//       return oneMovie.id !== movieData.id
//     })
//     localStorage.setItem('favs', JSON.stringify(movieLeft))
//     console.log('Se Elimino la pelicula')
//   }
   
//   }


// render={(addOrRemoveFromFavs) => ({ ...addOrRemoveFromFavs })}
  return (
   <div className="container">
   
   <Header/>
   <Routes>
     <Route path="/"  element= {<Login/>}/>
     <Route path="/listado"  element= { <Listado  />}/>
     <Route path="/detalle"  element= {<Detalle/>}/>
     <Route path="/resultados"  element= {<Resultados />}/>
     <Route path="/favoritos"  element= {<Favoritos/>}/>
   </Routes>
   {/* <Footer/> */}
  
   </div>
  );
}

export default App;
