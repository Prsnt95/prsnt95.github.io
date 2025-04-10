import React, { useState, useEffect } from "react";
import "./Navbar.css";
import IconHome from "../../assets/icons/IconHome";
import IconPortfolio from "../../assets/icons/IconFolderOpen";
import IconContacts from "../../assets/icons/IconContacts";
import IconTools from "../../assets/icons/IconTools";
import HoverTextButton from "../../components/HoverTextButton";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting (visible in the viewport)
          if (entry.isIntersecting) {
            // Get the section ID from the element
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        // Options for the observer
        root: document.querySelector(".contentSection"), // Use the content section as the root
        rootMargin: "-40% 0px -40% 0px", // Only consider the middle 20% of the viewport
        threshold: 0.1, // Trigger when at least 10% of the section is visible
      }
    );

    // Observe all sections
    const sections = ["home", "projects", "tools", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll event listener to update active section
    const handleScroll = () => {
      const contentSection = document.querySelector(".contentSection");
      if (!contentSection) return;

      const windowHeight = window.innerHeight;

      // Find which section is most visible in the viewport
      let maxVisibility = 0;
      let mostVisibleSection = activeSection;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const visibility = Math.min(
          rect.bottom - rect.top,
          windowHeight - rect.top,
          rect.bottom,
          windowHeight
        );

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = sectionId;
        }
      });

      if (mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const contentSection = document.querySelector(".contentSection");
    if (contentSection) {
      contentSection.addEventListener("scroll", handleScroll);
    }

    // Clean up
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });

      if (contentSection) {
        contentSection.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeSection]);

  return (
    <header className="Navbar">
      <div className="Navbar-container">
        <ul className="Navbar-list">
          <li className="Navbar-item" onClick={() => scrollToSection("home")}>
            <HoverTextButton
              text="Home"
              icon={IconHome}
              onClick={() => {}}
              className={activeSection === "home" ? "active" : ""}
            />
          </li>
          <li
            className="Navbar-item"
            onClick={() => scrollToSection("projects")}
          >
            <HoverTextButton
              text="Projects"
              icon={IconPortfolio}
              onClick={() => {}}
              className={activeSection === "projects" ? "active" : ""}
            />
          </li>
          <li className="Navbar-item" onClick={() => scrollToSection("tools")}>
            <HoverTextButton
              text="Tools"
              icon={IconTools}
              onClick={() => {}}
              className={activeSection === "tools" ? "active" : ""}
            />
          </li>
          <li
            className="Navbar-item"
            onClick={() => scrollToSection("contact")}
          >
            <HoverTextButton
              text="Contact"
              icon={IconContacts}
              onClick={() => {}}
              className={activeSection === "contact" ? "active" : ""}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
