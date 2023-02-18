import React from "react";
import { NavLink } from "react-router-dom";
import image from "./pep.jpeg";
function nav() {
  function f1(event) {
  //   let a = document.querySelectorAll(".nav-link")\;
  // let a={x:1,y:2}
  // let z="hello";
  // let c={...a,[z]:50,v:z}
  // console.log(c)
// console.log(event)
// let {name}=event.target
// console.log(name)
// console.log(event.target)
  //   a.forEach((element) => {
  //     element.style.textDecoration = "none";
  //     element.style.fontWeight = "normal";
  //   });

  //   event.target.style.textDecoration = "underline";
  //   event.target.style.fontWeight = "bold";/ }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark fixed-top pt-0 pb-0">
        <div className="container-fluid">
          <img
            className="d-none d-sm-block"
            src={image}
            style={{ width: "90px", height: "50px" }}
            alt=".."
          />
          <a className="navbar-brand" href="#">
            <h1 id="head">
              <span style={{ color: "red" }}>Pep</span>coding.com
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 px-5 text-center">
              <li className="nav-item">
                <NavLink
                style={{textDecoration:"none"}}
                  className="nav-link "
                  // onClick={(e) => {
                  //   f1(e);
                  // }}
                
                  activeClassName="active"
                  aria-current="page"
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  activeClassName="active"
                  className="nav-link "
                  value="hello"
                  name="username"
                  onClick={(e) => {
                    f1(e);
                  }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                activeClassName="active"
                  className="nav-link"
                  // onClick={(e) => {
                  //   f1(e);
                  // }}
                  to="/Services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                activeClassName="active"
                  className="nav-link"
                  // onClick={(e) => {
                  //   f1(e);
                  // }}
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                activeClassName="active"
                  className="nav-link"
                  // onClick={(e) => {
                  //   f1(e);
                  // }}
                  to="/Team"
                >
                  Team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default nav;
