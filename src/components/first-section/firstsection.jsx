import React from "react";
import "./firstsection.css";
import Firstim from "../../assests/landingimg2.svg";


const firstSection = () => {
  return (
    
      
        <div className="section1">
            <div className="home_content">
              <h2 className="home_title">
               Mycin Club
              </h2>
              <p className="information1">
              Mycin is a student driven club since 2021 associated with KIET Innovative Center. We are  dedicated to provide all our members an ability to identify, formulate, and solve engineering problems. 
              <br></br>An understanding of professional and ethical responsibility.
              
              </p>
              <button className="btninside">Join us </button>
            </div>
            
              <div className="section1image">
                <img src={Firstim} alt="" />
              </div>
        </div>
      
    
  );
};

export default firstSection;