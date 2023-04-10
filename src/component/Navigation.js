import React from "react";
import "./Style/Navigation.css";

export const Navigation = (props) => {
  let setPageName = props.setPageName;
  // let {stagePageName} = props;

  // Another way to have navigation links to change the page is:
  // React-Router-Dom
  
  // This way is called Conditional Rendering using useState and Props
  return (
    <div>
    <h1 id='header-title'> Yuri's Portfolio</h1>
    <nav id="navigation">
      <ul>
        <li>
          <a onClick={()=>{ setPageName("Home") }}>Home</a></li>
        <li>
          <a onClick={()=>{ setPageName("AboutMe") }}>About Me</a></li>
        <li>
          <a onClick={()=>{ setPageName("Skills") }}>Skills</a></li>
        <li>
          <a onClick={()=>{ setPageName("Project") }}>Projects</a></li>
        <li>
          <a onClick={()=>{ setPageName("Resume") }}>Resume</a></li>
        <li>
          <a onClick={()=>{ setPageName("Contact") }}>Contact</a></li>
      </ul>
    </nav>
    </div>

  );
};
