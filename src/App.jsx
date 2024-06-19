import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  const [scrollUpBTN, setScrollUpBTN] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollUpBTN(true);
      } else {
        setScrollUpBTN(false);
      }
    });
  });

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />

      <a style={{ opacity: scrollUpBTN ? 1 : 0, transition: "1s" }} href="#up">
        <button className="scroll-to-top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
