import "./styles.css";
const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id="nav-link-main" href="/">
              Padawans
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" id="nav-link" href="/todos">
              Todos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="nav-link" href="/albums">
              Albums
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="nav-link" href="/posts">
              Postagens
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
