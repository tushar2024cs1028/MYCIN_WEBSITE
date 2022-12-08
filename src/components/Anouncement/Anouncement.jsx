import React from "react";
import "./Anouncement.css";
import Regimg from "../../assests/Announcement/Bootcamp2.jpeg";

const Anouncement=()=>{
     return (<div className="anounce">
              
                <h3 className="tittleAnounce">Announcement</h3>
                <div className="Anouncement_Container">
                <div className="anouncecontent">
                    <h4 className="Event_name">Dev 1.0</h4>
                    <p className="eventdetails">
                    MYCIN club is back with an amazing opportunity for you all!🥳🎉<br></br>

🥳🎉 DEV 1.0 🎉🥳<br></br>

We are launching a Web Development Training Camp.<br></br>
In this session, we'll give you training for building a website along with a live project demonstration.<br></br>

🗓️Starts: 12Dec, 2022<br></br>
🕰️Time: 5:00-6:30 PM<br></br>
📍Venue: Innovation Centre<br></br>
✨Perks:<br></br>
-> Certificate for all the participants<br></br>
-> Gifts for top three performers<br></br>

LAST DATE: 10 Dec, 2022<br></br>



Hurry up and register yourself for an amazing and interactive session!⌛<br></br>
Limited seats only!<br></br>
                    </p>
                    <a href="https://forms.gle/1J4vUerPvhqQgZ5C8" target="_blank" rel="noreferrer"><button className="registerbtn">Registe now </button></a>

                </div>
                <div className="Imgsection">
                    <img  src={Regimg} alt="" />
                </div></div>
     </div>);
};
export default Anouncement;