import React, { useEffect } from "react";
import "./portfolio.css";
import img1 from "../../images/port1.png";
import img2 from "../../images/port2.png";
import img3 from "../../images/port3.png";
import $ from "jquery";
export default function Portfolio() {
useEffect(function(){
  let pluslist =Array.from(document.querySelectorAll(".fa-plus"))
  for( let i=0;i<pluslist.length;i++){
    pluslist[i].addEventListener("click",function(e){
      let imgSrc = $(this).parent().prev().attr("src")
      $("#imgModel").attr("src",imgSrc)
      $("#modelBox").removeClass("d-none")
      $("#modelBox").addClass("d-flex")
    })
  }
},[])
useEffect(function(){
  $("#modelBox").click(function(e){
    if(e.target.getAttribute("id") == "modelBox"){
      $("#modelBox").removeClass("d-flex")
      $("#modelBox").addClass("d-none")
    }
  })
},[])
  return (
    <>
      <section className=" portfolio">
        <div className="container py-5">
          <div className="title text-center pb-1">
            <h1>PORTFOLIO COMPONENT</h1>
          </div>
          <div className="start d-flex align-items-center justify-content-center pb-3">
            <div className="line bg me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line bg ms-3"></div>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="item rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i
                    className="text-white fa-solid fa-plus fa-6x"
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded-3 overflow-hidden position-relative">
                <img src={img1} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded-3 overflow-hidden position-relative">
                <img src={img2} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item rounded-3 overflow-hidden position-relative">
                <img src={img3} alt="" className="w-100 rounded-3" />
                <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="modelBox" className="model__ position-fixed top-0 start-0 h-100 w-100 bg-primary bg-opacity-25 d-none justify-content-center align-items-center ">
        <img id="imgModel" src={img1} className="w-50" alt="" />
      </div>

     
    </>
  );
}
