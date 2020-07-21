import React from "react";
import "./App.css";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Logo from "./assets/logo-netflix.png";
import data from "./assets/movies.json";

function App() {
  return (
    <div>
      <img src={Logo} alt="" className="logo"></img>
      {data.map((category, index) => {
        return <Section className="section" key={index} category={category} />;
      })}
      <Footer
        className="footer"
        technoLink="https://fr.reactjs.org/"
        technoName="React"
        companyLink="https://www.lereacteur.io"
        companyName="le Reacteur"
        authorLink="https://github.com/TomPerrau94"
        authorName="Tom Perrau"
      />
    </div>
  );
}

export default App;
