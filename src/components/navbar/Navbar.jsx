import React from "react";
import "./Navbar.css";
import IconHome from "../../assets/icons/IconHome";
import IconPortfolio from "../../assets/icons/IconFolderOpen";
import IconContacts from "../../assets/icons/IconContacts";
import IconTools from "../../assets/icons/IconTools";

function Navbar() {
  return (
    <header className="Navbar">
      <div className="Navbar-container">
        <ul className="Navbar-list">
          <li className="Navbar-item">
            <IconHome height="2em" width="2em" />
          </li>
          <li className="Navbar-item">
            <IconPortfolio height="2em" width="2em" />
          </li>
          <li className="Navbar-item">
            <IconTools height="2em" width="2em" />
          </li>
          <li className="Navbar-item">
            <IconContacts height="2em" width="2em" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
