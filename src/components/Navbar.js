import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const hendelClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton= () =>{
    if(window.innerWidth <= 950){
      setButton(false)
    }else{
      setButton(true)
    }

  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener("resize",showButton);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Adventure
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/Home" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/Services" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/Products" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links-mobile" to="/SignUp" onClick={closeMobileMenu}>
                SignUp
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
