import React from "react";
import "./About.css";
import aboutImg from "../about.jpg"
import aboutIMg from "../about1.jpg"

function About() {
  return (
    <div className="about component_space">
        <div className="container">
            <div className="row">
                <div className="col_2" >
                    <img src={aboutImg} alt="founders" className="about_img" />
                </div>
                <div className="col_2">
                    <h1 className="about_heading">
                        About Us
                    </h1>
                    <div className="about_meta">
                        <p className="about_text">Monet Hive conveys premium substance to people across stages around the world. 
                        We associate with a vast number of individuals — through our studios, organizations, web-based features, 
                        live occasions, product, and that's just the beginning. Our studios make content for all age groups, 
                        across each classification and arrangement, while our organizations and brands manufacture profound associations 
                        with the world's most assorted crowds. In streaming, our separated system is scaling quickly across free, 
                        expansive compensation, and premium.</p>
                        <p className="about_text">Our passion is to ensure that we create content that will bring enjoyment to our cusomters
                        through the different services that we offer. Seeing that we target different categories of people, we like to make sure
                        that what we provide upholds the standards as well as the integrity of the compmay </p>
                        <div className="about_button">
                            <a href="#"><button className="about btn pointer1">Contact Cholwe</button></a>
                            <a href="#"><button className="about btn pointer">Contact Mapalo</button></a>
                        </div>
                    </div>
                    <img src={aboutIMg} alt="founders" className="about_img1" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About