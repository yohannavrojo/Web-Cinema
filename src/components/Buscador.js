import {useNavigate}from 'react-router-dom'
import swAlert from "@sweetalert/with-react";
import { ImSearch } from 'react-icons/im';

function Buscador() {
  const navegacion = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const keyword= e.currentTarget.keyword.value.trim()
        
        if(keyword.length === 0){
           swAlert(<h5>Tiene que escribir una palabra</h5>)
        }else if (keyword.length <4){
            swAlert(<h5>Tiene que escribir mas de 4 caracteres</h5>)
        }else{
          e.currentTarget.keyword.value='';
          navegacion(`/resultados?keyword=${keyword}`)
        }
    }
  return (


    <form className="search " onSubmit={submitHandler}>

      <label className="search-label  ">
        <input className="formu" type="text" name="keyword" placeholder="Buscar.."/>
      </label>
       <button type="submit" className="btn my-5"style={{ color: 'white ', size: '4em' }}><ImSearch  /></button>
      
    </form>
  );
}

export default Buscador;
