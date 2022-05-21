import React from "react";
import swAlert from "@sweetalert/with-react";

function Buscador() {
    const submitHandler = (e) => {
        e.preventDefault();
        const keyword= e.currentTarget.keyword.value
        
        if(keyword.length === 0){
           swAlert(<h5>Tiene que escribir una palabra</h5>)
        }
    }
  return (


    <form className="d-flex alig-items-center" onSubmit={submitHandler}>

      <label className="form-label mb-0 mx-4 my-2">
        <input className="form-control" type="text" name="keyword" placeholder="Buscar.."/>
      </label>
        <button type="submit" className="btn btn-success  mx-3">Buscar</button>
      
    </form>
  );
}

export default Buscador;
