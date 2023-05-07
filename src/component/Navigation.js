import React from "react";
import "./Style/Navigation.css";

export const Navigation = (props) => {
  let setPageName = props.setPageName;
  // let {stagePageName} = props;

  // Another way to have navigation links to change the page is:
  // React-Router-Dom
  
  // This way is called Conditional Rendering using useState and Props
  return (
    <div id='nav' className='container'>
    <h1 className='navbar-brand' id='header-title'> Yuri's Portfolio</h1>
    <nav id="navigation">
      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <a onClick={()=>{ setPageName("Home") }}>Home</a></li>
        <li className='nav-item'>
          <a onClick={()=>{ setPageName("AboutMe") }}>About Me</a></li>
        <li className='nav-item'>
          <a onClick={()=>{ setPageName("Skills") }}>Skills</a></li>
        <li className='nav-item'>
          <a onClick={()=>{ setPageName("Project") }}>Projects</a></li>
        <li className='nav-item'>
          <a onClick={()=>{ setPageName("Resume") }}>Resume</a></li>
        <li className='nav-item'>
          <a onClick={()=>{ setPageName("Contact") }}>Contact</a></li>
      </ul>
    </nav>
    </div>

  );
};
