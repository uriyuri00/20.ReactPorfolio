import React from "react";
// import mainBG from './image/main-background.jpg'
import "./Style/Home.css";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <div className="home">
      <div className="main-info">
        {/* <img src={ mainBG} /> */}
        <h1 id="heroTitle">Web development</h1>
        <TypeAnimation
          sequence={[
            `Full stack developer.`,
            1000,
            `Web design.`,
            1000,
            `Web Development.`,
            1000,
            "",
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ color: "rgb(42, 42, 186)" }, {fontSize: '2em'}}
        />
        <a href='#' className='btn-main-offer'> Contact me</a>
      </div>
    </div>
  );
};
