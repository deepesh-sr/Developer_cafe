import React from "react";
// import { useState } from "react";
// import { info } from "../config";

const Title = () => {
  return (
    <h1>
      <a href="/">Developers' Cafe</a>{" "}
    </h1>
  );
};

// Styling
const navItemsStyle = {
  backgroundColor: "whitesmoke",
};

const HeaderComponent = () => {
  
 
    
  
  return (
    <>
      <div className="heading">
        <Title />
        <div className="nav-items" style={navItemsStyle}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      
    </>
  );
};
export default HeaderComponent;
