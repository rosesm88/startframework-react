import React from "react";
import "./Home.css";
import profileImg from "../../images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home ">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <div className="content text-center">
                <img src={profileImg} alt="" className=" custom-img mb-3" />
                <h2>START FRAMEWORK</h2>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="line me-3"></div>
                  <i className="text-white fa-solid fa-star"></i>
                  <div className="line ms-3"></div>
                </div>
                <h6 className="text-white pt-3">
                  Graphic Artist - Web Designer - Illustrator
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
