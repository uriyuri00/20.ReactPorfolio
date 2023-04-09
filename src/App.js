// import logo from './logo.svg';
import React, { useState } from "react";
import { AboutMe } from "./component/AboutMe";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Navigation } from "./component/Navigation";
import { Project } from "./component/Project";
import { Resume } from "./component/Resume";
import { Skills } from "./component/Skills";
import "./component/Style/App.css";

const App = () => {
  let [pageName, setPageName] = useState("AboutMe");

  return (
    <div className="App">
      <Navigation setPageName={setPageName} />
      <header className="header" id="site-header">
        <Header />
      </header>
      <main id="site-main">
        
        {pageName==="AboutMe"?<AboutMe/>:""}
        {pageName==="Skills"?<Skills/>:""}
        {pageName==="Project"?<Project/>:""}
        {pageName==="Resume"?<Resume/>:""}
        {pageName==="Contact"?<Contact/>:""}

      </main>
      <footer>
        <Footer />
        <Contact />
      </footer>
    </div>
  );
};
export default App;
