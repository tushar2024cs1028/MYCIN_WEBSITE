import React from "react";
import "./Anouncement.css";
import Regimg from "../../assests/Announcement/recruitment2026.jpeg";

const Anouncement=()=>{
     return (<div className="anounce">
              
                <h3 className="tittleAnounce">Announcement</h3>
                <div className="Anouncement_Container">
                <div className="anouncecontent">
                    <h4 className="Event_name">RECRUITMENT BATCH 2026</h4>
                    <p className="eventdetails">
                    Hola Amigos! 👋👋👋<br></br>

Hope you all are doing great!<br></br>

MYCIN is back with its recruitments !✨🙌🔥<br></br>

Come and explore these interesting domains with us 👇🏻<br></br>

■ MACHINE LEARNING <br></br>
■ WEB D<br></br>
■ AR/VR<br></br>
■ ANDROID DEVELOPMENT<br></br>
■ CYBER SECURITY<br></br>

We are super excited to work with the new creative minds. 🔥🥳<br></br>

So what are you guys waiting for? 🤔<br></br>

Hurry up and join us to be a part of an exciting journey!✨<br></br>
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjz55WdXsW1wL54hwruELFIsHcDeZMve3M_Em8Em-i8lJllw/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button className="registerbtn">Register now </button></a>

                </div>
                <div className="Imgsection">
                    <img  src={Regimg} alt="" />
                </div></div>
     </div>);
};
export default Anouncement;