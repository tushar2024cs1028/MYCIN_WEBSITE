import "./Resources.css";
import { Link } from "react-router-dom";
const Resources=()=>{
return(
    <div className="Resources">
        <h3 className="Resources_Title">Resources</h3>
        <div className="Resources_Name">
                        <h4>Frontend</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
  	 				        <li><a className="alink" href="https://www.w3schools.com/html/" target="_blank">Learn HTML</a></li>
  	 				        <li><a className="alink" href="https://www.w3schools.com/css/" target="_blank">Learn CSS</a></li>
  	 				        <li><a  className="alink" href="https://www.w3schools.com/js/" target="_blank">Learn JavaScript</a></li>
  	 				        <li><a  className="alink" href="https://reactjs.org/" target="_blank">Learn React JS</a></li>
  	 			         </ul>
        </div>
        <div className="Resources_Name">
                        <h4>Backend</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
							<li><a className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a  className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a  className="alink" href="#!" target="_blank">How does it work</a></li>
  	 			         </ul>
        </div>
        <div className="Resources_Name">
                        <h4>Artificial Intelligence</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
							<li><a className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a  className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a  className="alink" href="#!" target="_blank">How does it work</a></li>
  	 			         </ul>
        </div>
        <div className="Resources_Name">
                        <h4>Cyber Security</h4>
                        <hr></hr>
  	 			         <ul className="Resources_Link">
							<li><a className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a  className="alink" href="#!" target="_blank">How does it work</a></li>
  	 				        <li><a  className="alink" href="#!" target="_blank">How does it work</a></li>
  	 			         </ul>
        </div>
    
    </div>
);
}
export default Resources;