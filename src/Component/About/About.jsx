import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <section className="about ">
        <div className="container py-5">
          <div className="d-flex justify-content-center align-items-center py-2">
            <h2 className="about-header">ABOUT COMPONENT</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i class="text-white fa-solid fa-star"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="container ">
            <div className="row px-5">
              <div className="col-md-6 ps-md-5">
                <p className="text-white mb-3">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6 pe-5">
                <p className="text-white mb-3">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
