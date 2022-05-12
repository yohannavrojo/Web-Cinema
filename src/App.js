import {Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";

//styles

import "./components/CSS/bootstrap.min.css";
function App() {
  return (
   <div className="container">
   
   <Header/>
   <Routes>
     <Route path="/"  element= {<Login/>}/>
     <Route path="/listado"  element= {<Listado/>}/>
   
   </Routes>
   {/* <Footer/> */}
  
   </div>
  );
}

export default App;
