import React from "react";
import "./Anouncement.css";
import Regimg from "../../assests/Announcement/foundation.jpeg";

const Anouncement=()=>{
     return (<div className="anounce">
              
                <h3 className="tittleAnounce">Announcement</h3>
                <div className="Anouncement_Container">
                <div className="anouncecontent">
                    <h4 className="Event_name">Foundation Day</h4>
                    <p className="eventdetails">
                    The occasion of Foundation Day is a proud day for every one as it gives them a reason to celebrate the inception.<br></br>

It gives us immense pleasure to share with you all that we at MYCIN will be celebrating our FIRST FOUNDATION DAY on 10 October 2022. 
The event will consist of the sharing of our journey, Cake cutting and a lot more activities.<br></br>

We Invite you all to come and see the glimpses of all the achievements and the learnings we had together as a team.Your presence will increase our happiness manifolds.
<br></br>
DATE: OCTOBER 10, 2022<br></br>
TIME: 1:00 PM<br></br>
VENUE: INNOVATION CENTER LAB<br></br>
                    </p>
                    {/*<a href="#!"><button className="registerbtn">Registe now </button></a>*/ }

                </div>
                <div className="Imgsection">
                    <img  src={Regimg} alt="" />
                </div></div>
     </div>);
};
export default Anouncement;