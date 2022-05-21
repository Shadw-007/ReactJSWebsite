import React from "react";
import "./Service.css";
import serviceImg from "../video_camera.jpg";
import serviceIMg from "../photography.jpg";
import serviceImg2 from "../cinema.jpg";
import serviceImg3 from "../design.jpg";
import serviceImg4 from "../animations.jpg";


function Service() {
  return (
    <section className="service">
        <h1>Our Offered Services</h1>
        <small>Hover over the different categories</small>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={serviceImg} alt="videography" className="service_img"/>
                        <h4>Videography</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={serviceIMg} alt="photography" className="service_img"/>
                        <h4>Photography</h4>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <img src={serviceImg2} alt="cinematography" className="service_img"/>
                        <h4>Cinematography</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-box">
                        <img src={serviceImg3} alt="graphic design" className="service_img"/>
                        <h4>Graphic Design</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="service-box">
                        <img src={serviceImg4} alt="animations" className="service_img"/>
                        <h4>Animations</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Service;
