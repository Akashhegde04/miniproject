import React, { useState } from "react";
import "./App.css";
import image1 from "./A-.png";

function App() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForms = () => {
    setIsRegister(!isRegister);
  };

  const bodyram = {
    margin: "0px",
    padding: "0px",
    backgroundColor: "#DDF7E3", 
    width:"100%",  
  }

  return (

    
    <div  style={bodyram}>
      {/* Your JSX content goes here */}
      <header>
        <div className="nav-left">
          <a href="login.html"><img src={image1} className="logo" alt="Logo" /></a>
          <a href="login.html" className="logo-title">ACE ARENA</a>
        </div>
        <nav className="nav-right">
          <a href="">REGISTER</a>
          <a href="#dc">ABOUT</a>
          <a href="#bc">CONTACT</a>
        </nav>
      </header>

      <div className="form-container">
        {isRegister ? (
          <div className="register">
            <div className="register-box">
              <h1 className="register-head">REGISTER</h1>
              <input type="email" placeholder="EMAIL" required className="register-inpt" />
              <input type="text" placeholder="USERNAME" required className="register-inpt" />
              <input type="password" placeholder="PASSWORD" required className="register-inpt" />
              <input type="password" placeholder="CONFIRM PASSWORD" required className="register-inpt" />
              <button className="back-login-btn">Create Account</button>
              <button className="create-btn" onClick={toggleForms}>Back to Login</button>
            </div>
          </div>
        ) : (
          <div className="login">
            <div className="login-box">
              <h1 className="login-txt">LOGIN</h1>
              <input type="text" placeholder="USERNAME" required className="login-inpt" />
              <input type="password" placeholder="PASSWORD" required className="login-inpt" />
              <button className="log">LOGIN</button>
              <span id="reg-text">Don't have an account?</span>
              <button className="reg-btn" onClick={toggleForms}>Register</button>
              <button className="skip-btn">Skip</button>
            </div>
          </div>
        )}
        <div className="side-img">
          <div className="img-box">
            <img className="side-logo" src={image1} alt="Logo" />
            <p className="sub-tag">Catch the Action as It Happens!</p>
          </div>
        </div>
      </div>

      <hr id="desc" />
      <div className="description" id="dc">
        <h2 className="abt-title">ACE ARENA</h2>
        <p className="abt">
          Ace Arena is a sports and esports website that focuses primarily on cricket, football, BGMI esports, and Valorant esports. It helps users stay updated with live match scores, scorecards, and schedules for both international and domestic matches, along with the latest news and videos.
        </p>
      </div>

      <hr id="cont" />
      <div className="contact-me">
        <h3>Found an Issue?</h3>
        <a className="contact-btn" href="mailto:akash10hv@gmail.com">Write to us</a>
      </div>

      <div className="bottom-container" id="bc">
        <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/">Twitter</a>
        <a className="footer-link" href="https://www.appbrewery.co/">Website</a>
        <p className="cr">©2024 Ace Arena.</p>
      </div>
    </div>
  );
}

export default App;
