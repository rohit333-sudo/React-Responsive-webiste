import "./App.css";
import React from "react";
import image1 from "./b5img/s4.jpg";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const About = () => {

  let arr = [
    {    title:"item1" ,
      h1: "Data Structures and Algorithms in Java 1234",
      Descp: "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "item1",
      h1: "Data Structures and Algorithms in Java",
      Descp: "Data Structures and Algorithms in JavaSome quick example text to build on the card title and   make up the bulk of the card's content.",
    },
    {
      title: "item1" ,
      h1: "Data Structures and Algorithms in Java",
      Descp: "Data Structures and Algorithms in Java example text to build on the card title and   example text to build on the card title and  ",
    }
  ];
  





  return (

    <div class="container justify-content-center">
      <div class="text-primary">
        <h1 data-aos="zoom-in-down" data-offset="250" class="text-center marg">
          About
        </h1>
        <hr class="m-auto w-25" />
      </div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 ">
            <h1 class="text-primary" data-aos="zoom-in-down" data-offset="250">
              what do you want to know ?
            </h1>
            <p>
              Pepcoding, founded in 2017 with the vision to bring in "The Great
              Indian Coding Renaissance". We specialise in teaching Data
              Structure & Algorithms ,Web Development, Data Science ,CORE, CBSE,
              GATE & Business Analytics and getting the best results out of
              these courses with more than 1000 placements in the past 2 years.
            </p>

            <button type="button" class="btn btn-outline-dark">
              more about me
            </button>

            <div
              data-aos="zoom-in-down"
              data-offset="250"
              class="accordion mt-5"
              id="accordionExample"
            >
{
  arr.map((val,idx)=>
  {
   return(
    <>
    
    <div class="accordion-item" key={idx}>
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                  {val.title}
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong>
                    {val.Descp}
                    purpose.
                  </div>
                </div>
             </div>
              
    
    </>
   )
  })
}

           </div>
          </div>
          <div class="col-md-6 m-auto text-center mt-1">
            <img
              data-aos="zoom-in-down"
              data-offset="250"
              class="img-fluid img-thumbnail"
              src={image1}
              alt=""
              id="boy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
