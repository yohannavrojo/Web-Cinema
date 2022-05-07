import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Login() {
	
	const submitHandler=e=>{
	e.preventDefault();
	const email=e.target.email.value;
	const password=e.target.password.value;
const regexEmail= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// console.log(regexEmail.test(email));

if (email=== ''|| password===''){
  swAlert(
    <h2> los campos no pueden estar vacios</h2>
  )
	
	return;
}
if (email!== ''&& !regexEmail.test(email)){
  swAlert(
    <h2> Debes escribir una direccion de correo electronico valida</h2>
  )

  return;
}
if (email!== 'challenge@alkemy.org'|| password!== 'react'){
  swAlert(
    <h2> Credenciales invalidas</h2>
  )

  return;
}

axios
.post('http://challenge-react.alkemy.org',{email,password})
.then(res=> { 
  swAlert(<h2> Perfecto , Ingresaste Correctamente</h2 >)
  const tokenRecibido = res.data.token;
  localStorage.setItem('token',tokenRecibido);
  localStorage.setItem('miNombre','yohannarojo');

})
}
  return (
    <>
    <h2>Formulario de login</h2>
<form onSubmit={submitHandler}>
    <label>
        <span>Correo electrónico:</span><br/>
        <input type="text"name="email"/><br/>
    </label>
    <br/>
    <label>
        <span>Contraseña:</span><br/>
        <input type="password"name="password"/><br/>
    </label>
    <br />
    <button type="submit">Ingresar</button>
</form>
    </>
  );
}

export default Login;
