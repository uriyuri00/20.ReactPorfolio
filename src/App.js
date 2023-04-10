// import logo from './logo.svg';
import React, { useState } from "react";
import { AboutMe } from "./component/AboutMe";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import { Home } from "./component/Home";
import { Navigation } from "./component/Navigation";
import { Project } from "./component/Project";
import { Resume } from "./component/Resume";
import { Skills } from "./component/Skills";

const App = () => {
  let [pageName, setPageName] = useState("Home");

  return (
    <div className="App">
      <Navigation setPageName={setPageName} />
      <header className="header" id="site-header">
      </header>
      <main id="site-main">
        {pageName==="Home"?<Home/>:""}
        {pageName==="AboutMe"?<AboutMe/>:""}
        {pageName==="Skills"?<Skills/>:""}
        {pageName==="Project"?<Project/>:""}
        {pageName==="Resume"?<Resume/>:""}
        {pageName==="Contact"?<Contact/>:""}

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default App;
