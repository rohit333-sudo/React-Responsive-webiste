import React from "react";
import logo from "./b5img/team4.jpg";
import logo1 from "./b5img/s2.jpg";
import logo2 from "./b5img/team4.jpg";
function Team() {
  let arr = [
    {
      title: "item1",
      h1: "Data Structures and Algorithms in Java 1234",
      Descp:
        "Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "item1",
      h1: "Data Structures and Algorithms in Java",
      Descp:
        "Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in JavaSome quick example text to build on the card title and   make up the bulk of the card's content.",
    },
    {
      title: "item1",
      h1: "Data Structures and Algorithms in Java",
      Descp:
        " Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and Data Structures and Algorithms in Java example text to build on the card title and   example text to build on the card title and  ",
    },
  ];

  return (
    <div>
      <div data-aos="zoom-in-down" data-offset="250" className="container">
        <div className="text-primary">
          <h1
            data-aos="zoom-in-down"
            data-offset="250"
            className="text-center  marg"
          >
            Team
          </h1>
          <hr className="m-auto w-25" />
        </div>
        <div className="row mt-5">
          {arr.map(function (val) {
            return (
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={logo2}
                      alt=""
                      className="img-fluid rounded-circle p-2 border border-secondary border-1"
                    />
                    <h5 className="card-title text-primary">
                      {" "}
                      Data Structures and Algorithms in Java
                    </h5>
                    <p className="card-text">
                      <h1> {val.h1}</h1>
                      {val.Descp}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
