import { Link } from "react-router-dom";



function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-xl navbar-black bg-black ">
      <p class="p-3 text-white display-6">ALkemy</p>
        <ul className="container-fluid"> 
        <div class="navbar-nav">
          <li className="nav-link">
            <Link  className="text-white bg-dark" to='/'>Home</Link>
          </li>
          <li className="nav-link">
            <Link className="text-white bg-dark" to='/listado'>Listado</Link>
          </li>
          <li className="nav-link">
            <Link  className="text-white bg-dark" to='/contacto'>Contacto</Link>
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
