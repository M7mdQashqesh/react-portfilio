import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects.js";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");

  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    setArr(
      myProjects.filter((element) => {
        const innerArr = element.category.find((innerElement) => {
          return innerElement === buttonCategory;
        });
        return innerArr === buttonCategory;
      })
    );
  };

  return (
    <main id="projects" className="parent-main">
      <div className="left-section ">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("htmlAndCss");
          }}
          className={currentActive === "htmlAndCss" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("javaScript");
          }}
          className={currentActive === "javaScript" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            handleClick("next");
          }}
          className={currentActive === "next" ? "active" : null}
        >
          NextJs
        </button>


      </div>

      <div className="right-section">
        <AnimatePresence>
          {arr.map((element) => {
            return (
              <motion.div
                key={element.imgPath}
                className="card"
                layout
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
              >
                <img width={270} height={150} src={element.imgPath} alt="" />
                <div className="description">
                  <h3 className="title">{element.projectTitle}</h3>
                  <p className="desc">{element.projectDescription}</p>
                  <div className="icons">
                    <div className="links-of-card ">
                      <a
                        href={element.projectLink}
                        target="_blank"
                        title="Project link"
                        rel="noreferrer noopener"
                      >
                        <div className="icon-link"></div>
                      </a>
                      <a
                        href={element.projectGitHub}
                        target="_blank"
                        title="GitHub link"
                        rel="noreferrer noopener"
                      >
                        <div className="icon-github"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Main;
