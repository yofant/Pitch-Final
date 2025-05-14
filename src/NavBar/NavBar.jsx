const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/Inicio">
                <i class="bi bi-house-fill"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Registro">
                <i class="bi bi-ui-checks"></i>
                  Registro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                <i class="bi bi-person-arms-up"></i>
                  Iniciar Sesion
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  };
  export default NavBar;