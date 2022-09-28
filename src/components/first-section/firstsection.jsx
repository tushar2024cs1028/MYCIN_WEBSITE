import React from "react";
import "./firstsection.css";
import Firstim from "../../assests/example-8.svg";


const firstSection = () => {
  return (
    
      
        <div className="section1">
            <div className="home_content">
              <h2 className="home_title">
               Welcome to Mycin <br /> Student Driven Club <br /> KIET Innovative Center
              </h2>
              <p className="information1">
              Mycin is a student driven club since 2021 associated with KIET Innovative Center. 
              The KIET Innovation Centre has been set-up to promote innovative work in the Institute to create better talented, creative, and well-rounded engineers.
              
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