import React from "react";
import "./Navbar.css";
import IconHome from "../../assets/icons/IconHome";
import IconPortfolio from "../../assets/icons/IconFolderOpen";
import IconContacts from "../../assets/icons/IconContacts";
import IconTools from "../../assets/icons/IconTools";
import HoverTextButton from "../../components/HoverTextButton";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="Navbar">
      <div className="Navbar-container">
        <ul className="Navbar-list">
          <li className="Navbar-item" onClick={() => scrollToSection("home")}>
            <HoverTextButton text="Home" icon={IconHome} />
          </li>
          <li
            className="Navbar-item"
            onClick={() => scrollToSection("projects")}
          >
            <HoverTextButton text="Projects" icon={IconPortfolio} />
          </li>
          <li className="Navbar-item" onClick={() => scrollToSection("tools")}>
            <HoverTextButton text="Tools" icon={IconTools} />
          </li>
          <li
            className="Navbar-item"
            onClick={() => scrollToSection("contact")}
          >
            <HoverTextButton text="Contact" icon={IconContacts} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
