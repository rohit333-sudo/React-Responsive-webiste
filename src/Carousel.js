import React from 'react'
import logo from "./logo.png";
import logo1 from "./p.jpeg";
import logo2 from "./b5img/banner1.jpg";
function Carousel() {
  return (
    <div data-aos="zoom-in-down" data-offset="250" id="carouselExampleIndicators" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo} className="d-block w-100  mt-5"
              alt="..."
              height="400px"/>
    </div>
    <div className="carousel-item">
      <img src={logo1} 
              className="d-block w-100 pt-5"
              alt="..."
              height="400px"
              />
    </div>
    <div className="carousel-item">
      <img src={logo2} className="d-block w-100"
              alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel