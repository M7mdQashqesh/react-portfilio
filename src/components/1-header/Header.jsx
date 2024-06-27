import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header>
      <button
        className="show-model icon-menu"
        onClick={() => {
          setShowModel(true);
        }}
      ></button>

      <div></div>

      <nav>
        <ul>
          <li>
            <a href="#up">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // send value to localStorage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // Get value from LoocalStorage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="switch-theam"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModel && (
        <div className="parent-model">
          <ul className="model">
            <li>
              <button
                onClick={() => {
                  setShowModel(false);
                }}
              >
                <span className="icon-cross"></span>
              </button>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModel(false);
                }}
                href="#up"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModel(false);
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModel(false);
                }}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowModel(false);
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
