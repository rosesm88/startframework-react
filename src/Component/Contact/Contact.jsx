import React, { useEffect } from "react";
import "./Contact.css";
import $ from "jquery";
export default function Contact() {
  useEffect(function () {
    $("#userName").keyup(function (e) {
      let x = $("#userName").val();
      if (x != "") {
        $("#userLabel").removeClass("__top");
      } else {
        $("#userLabel").addClass("__top");
      }
    });
  }, []);
  useEffect(function () {
    $("#userAge").keyup(function (e) {
      let x = $("#userAge").val();
      if (x != "") {
        $("#ageLabel").removeClass("__top");
      } else {
        $("#ageLabel").addClass("__top");
      }
    });
  }, []);
  useEffect(function () {
    $("#userEmail").keyup(function (e) {
      let x = $("#userEmail").val();
      if (x != "") {
        $("#emailLabel").removeClass("__top");
      } else {
        $("#emailLable").addClass("__top");
      }
    });
  }, []);
  useEffect(function () {
    $("#userPassword").keyup(function (e) {
      let x = $("#userPassword").val();
      if (x != "") {
        $("#passwordLabel").removeClass("__top");
      } else {
        $("#passwordLabel").addClass("__top");
      }
    });
  }, []);
  return (
    <>
      <section className="contact ">
        <div className="container py-5">
          <div className="title text-center pb-1">
            <h1>CONTACT SECTION</h1>
          </div>
          <div className="start d-flex align-items-center justify-content-center pb-3">
            <div className="line bg me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line bg ms-3"></div>
          </div>
          <form action="" className="w-50 mx-auto p-3 mt-5 ">
            <label
              id="userLabel"
              htmlFor="userName"
              className="position-relative top-0  __top"
            >
              userName :
            </label>
            <input
              type="text"
              id="userName"
              placeholder="userName"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <label
              id="ageLabel"
              htmlFor="userAge"
              className="position-relative top-0  __top"
            >
              userAge :
            </label>
            <input
              type="text"
              id="userAge"
              placeholder="userAge"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <label
              id="emailLabel"
              htmlFor="userEmail"
              className="position-relative top-0  __top "
            >
              userEmail :
            </label>
            <input
              type="email"
              id="userEmail"
              placeholder="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <label
              id="passwordLabel"
              htmlFor="userPassword"
              className="position-relative top-0  __top "
            >
              userPassword :
            </label>
            <input
              type="password"
              id="userPassword"
              placeholder="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative "
            />
            <button className="btn mt-4 text-white">Send </button>
          </form>
        </div>
      </section>
    </>
  );
}
