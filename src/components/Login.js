// import axios from "axios";
// import swAlert from "@sweetalert/with-react";
import { Link, useNavigate } from "react-router-dom";
import imagen1 from"./CSS/imagenhome.jpg"
import Header from "./Header";


function Login() {
  const navegacion = useNavigate();
 

  const submitHandler = (e) => {
    e.preventDefault();
      navegacion("/listado");
        
  };

  
 
  return (
    <>
    


    <div className="body-ever">
<div className="home">
        
        
          <img
            className="Imgtitulo"
            src={imagen1}
          />
      
      </div>

            <form onSubmit={submitHandler}>
              <div className="bodybutton">
                <button type="submit" className="bn13">
                  Ingresar
                </button>
              </div>
            </form>

</div>

    </>
  );
}

export default Login;
