import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="item text-center text-white">
                <h4>LOCATION</h4>
                <h6 className="mb-3">2215 John Daniel Drive</h6>
                <span>Clark, MO 65243</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center text-white">
                <h4>AROUND THE WEB</h4>
                <div className="icon">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item text-center text-white">
                <h4>ABOUT FREELANCER</h4>
                <h6>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-dark text-white text-center py-3">
        <h6>Copyright © Your Website 2021</h6>
      </div>
    </>
  );
}
