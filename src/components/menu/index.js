import "./styles.css";
import { useState } from "react";
const Menu = () => {
  const [itemsChange, setItemsChange] = useState(false);
  function menuOnClick() {
    const status = itemsChange ? false : true;
    setItemsChange(status);
  }
  return (
    <nav id="navbar" className={itemsChange ? "change" : "no-change"}>
      <div id="menu-bar" onClick={menuOnClick}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
      <div>
        <ul className="navbar-links">
          <div>
            <li className="nav-item active">
              <a id="link-main" href="/">
                Padawans
              </a>
            </li>
          </div>
          <div>
            <li className="nav-item active">
              <a href="/">Home</a>
            </li>
            <li className="nav-item active">
              <a href="/todos">Todos</a>
            </li>
            <li className="nav-item">
              <a href="/albums">Albums</a>
            </li>
            <li className="nav-item">
              <a href="/posts">Postagens</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
