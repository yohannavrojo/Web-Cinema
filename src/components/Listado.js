import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

function Listado() {
  const navegacion = useNavigate();

 
 useEffect(()=> {
 const token = localStorage.getItem("token");
 console.log(token);
  if (token === null) {
    navegacion('/');
  }

 },[])



  return (<h2>Mi componente listado </h2>);
}

export default Listado;
