import "./App.css";
import React from "react";
import logo from "./images/Sundar-Pichai.png";
// import logo1 from "./images/23973-7-bill-gates-file.png";
// import logo2 from "./images/Larry-Page-PNG-Pic.png";

const Services = () => {
  let arr = [
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java",
      Descp:
        "Data Structures and Algorithms in JavaSome quick example text to build on the card title and   make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java",
      Descp:
        "Data Structures and Algorithms in Java example text to build on the card title and   example text to build on the card title and  ",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java",
      Descp:
        "Data Structures and Algorithms in JavaSome quick example text to build on the card title and   make up the bulk of the card's content.",
    },
    {
      title: "Untittle",
      h1: "Data Structures and Algorithms in Java",
      Descp:
        "Data Structures and Algorithms in Java example text to build on the card title and   example text to build on the card title and  ",
    },
  ];
  return (
    <div class="container">
      <div class="text-primary ">
        <h1 data-aos="zoom-in-down" data-offset="250" class="text-center marg">
          Services
        </h1>
        <hr class="m-auto w-25" />
      </div>
      <div data-aos="zoom-in-down" data-offset="250" class="row mt-3">
        {arr.map((val, idx) => {
          return (
            <div class="col-md-4" key={idx}>
              <div class="card" data-aos="zoom-in-down" data-offset="250">
                <div class="card-body">
                  <h1 class="card-title text-primary">{val.head} </h1>

                  <p class="card-text">{val.Descp}</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
