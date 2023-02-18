import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./b5img/s4.jpg";

function Contact() {
  let obj = { Password: "", Email: "", City: "", Address: "", Zip: "" };
  const [msg, setMsg] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const [data, setData] = useState(obj);
  const [err, setErr] = useState({});
  useEffect(() => {
    if (Object.keys(err).length === 0 && isSubmit) {
      localStorage.setItem("data", JSON.stringify(data));
      setMsg(" Message Sent");
    }
  }, [err]);

  function handleData(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function handlSubmit(e) {
    e.preventDefault();
    setErr(validate(data));
    setSubmit(true);
    
  }
  function validate(data) {
    let err = {};
    if (!data.Email) err.Email = "enter email";
    if (!data.Password) err.Password = "enter password";
    if (!data.Zip) err.Zip = "enter Zip";
    if (!data.Address) err.Address = "enter Address";
    if (!data.City) err.City = "enter City";

    return err;
  }

  return (
    <>
      <div data-aos="zoom-in-down" data-offset="250" className="container ">
        <div className="row ">
          <div className="text-primary marg">
            <h1 className="text-center ">Conatct Us</h1>
            <hr className="m-auto w-25" />
          </div>
          <div className="col-lg-6 ">
            <form
              onSubmit={(e) => {
                handlSubmit(e);
              }}
              className="row g-3"
            >
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  onChange={(e) => handleData(e)}
                  name="Email"
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                />
                {err.Email && <span style={{ color: "red" }}>{err.Email}</span>}
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  onChange={(e) => handleData(e)}
                  name="Password"
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
                {err.Password && (
                  <span style={{ color: "red" }}>{err.Password}</span>
                )}
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  onChange={(e) => handleData(e)}
                  name="Address"
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  
                />
                {err.Address && (
                  <span style={{ color: "red" }}>{err.Address}</span>
                )}
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  onChange={(e) => handleData(e)}
                  name="Address 2"
                  type="text"
                  className="form-control"
                  id="inputAddress2"
         
                />
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">
                  City
                </label>
                <input
                  onChange={(e) => handleData(e)}
                  name="City"
                  type="text"
                  className="form-control"
                  id="inputCity"
                />
                {err.City && <span style={{ color: "red" }}>{err.City}</span>}
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label for="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  onChange={(e) => handleData(e)}
                  name="Zip"
                  type="text"
                  className="form-control"
                  id="inputZip"
                />
                {err.Zip && <span style={{ color: "red" }}>{err.Zip}</span>}
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>{" "}
                {msg && (
                  <span
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                    className="text-success me-5"
                  >
                    {msg} ....!{" "}
                  </span>
                )}
              </div>
            </form>
          </div>
          <div className="col-lg-6  text-end mt-3 m-auto ">
            <img
              className="img-fluid img-thumbnail "
              src={logo}
              alt=""
              id="boy"
            />
          </div>
        </div>
      </div>
      {/* <h3>{JSON.stringify(data)}</h3> */}
    </>
  );
}

export default Contact;
