import { Link } from "react-router-dom";
import Claqueta from "./CSS/claqueta.png"
import Buscador from "./Buscador";


function Header(props) {


  return (
    <header >
    
      <nav className="navbar">
      <img className="header-img"
            src={Claqueta}
            
            />
      
        <ul className="menu-navbar"> 
          <div className="div-navbar">
          <li className="nav-link">
            <Link  className="text-white" to='/'>Home</Link>
            
          </li>
          {/* <li className="nav-link">
            <Link className="text-white " to='/listado'>Listado</Link>
          </li> */}
          <li className="nav-link">
            <Link className="text-white " to='/favoritos'>Favoritos</Link>
          </li>
          {/* <li className="nav-link d-flex align-item-center" style={{fontSize:"1.3em"}} >
           <span className="text-success " >
            {props.favorites.length > 0 && <>Pelicula en Favoritos: { props.favorites.length}</> }
           </span>
          </li> */}
          </div>
        </ul>
        <Buscador/>
      </nav>
    </header>
  );
}

export default Header;
