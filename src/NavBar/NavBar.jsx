
import "../css/NavBar.css";
const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/Inicio">
                <i class="bi bi-house-door-fill"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Registro">
                <i className="bi bi-ui-checks"></i>
                  Registro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                <i className="bi bi-box-arrow-in-right"></i>
                  Iniciar Sesion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Carrito">
                <i className="bi bi-cart-check"></i>
                  Carrito
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  };
  export default NavBar;