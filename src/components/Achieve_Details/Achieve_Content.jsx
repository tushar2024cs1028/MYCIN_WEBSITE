import "./Achieve_Content.css";
import AchieveCard from "./Achieve_Card";
import image1 from "../../assests/Achievements/IndiaPosterMakingArchit.jpg";
import image2 from "../../assests/Achievements/IndiaPosterMakingVaishnavi.jpeg";
import image3 from "../../assests/Achievements/SIHFinale.jpeg";
import image4 from "../../assests/Achievements/SIHStudentCoordinator.jpg";
import image5 from "../../assests/Achievements/TechathonGalgotia.jpeg";
import image6 from "../../assests/Achievements/Siddhart.jpg";
import image7 from "../../assests/Achievements/Innotech2022.jpeg";
import image8 from "../../assests/Achievements/RajitRastogi.jpeg";


function AchieveContent() {
    const cards = [
        {
          id: 1,
          title: "Archit Srivastava",
          image: image1,
          text:"Pan India Poster Making competition",
          date:"2021-6-15",
          position:"1st Rank"   
        },
        {
          id: 2,
          title: "Vaishnavi Awasthi",
          image: image2,
          text:"Pan India Poster Making competition",
          date:"2022-6-15",
          position:"3rd Rank"
         
          
        },
        {
          id: 3,
          title: "Team Brute Force",
          image: image3,
          text:"Smarth India Hackathon-22",
          date:"2022-08-31",
          position:"Finalists"
         
          
        },
        {
            id: 4,
            title: "Student Coordinators",
            image: image4,
            text:"Smarth India Hackathon-22,Hardware Edition ",
          date:"2022-08-31",
          position:"AS a Coordinator"
            
            
          },
          {
            id: 5,
            title: "Team Brute Force",
            image: image5,
            text:"Technothon held at Galgotia University",
          date:"2022-5-11",
          position:"Finalists,Top 5"
           
            
          },
          {
            id: 6,
            title: "Siddharth Chourasia",
            image: image6,
            text:"Renaissance MUJ 1.0| Won 15k prize|Manipal University,Jaipur",
          date:"In 2022",
          position:"1st Rank"
            
          },
          {
            id: 7,
            title: "Siddharth Chourasia",
            image: image7,
            text:"Innotech 22|Won Prize 5k|KIET Ghaziabad",
          date:"In 2022",
          position:"3rd Rank"
            
          },
          {
            id: 8,
            title: "Rajit Rastogi",
            image: image8,
            text:"Startup to Funding (Shark tank Series|Won Prize 25k|Diligentia (PGDAV College ,DU",
          date:"In 2022",
          position:"1st Rank"
            
          }
      ];
  return ( <div className="Achievement_container ">
  <h3 className="Achievement_Title">Achievements</h3>
     <div className="Achievement_row">
        {cards.map(({ title, image, text,date,position, id }) => (
           <div className="Achievement_col" key={id}>
             <AchieveCard imageSource={image} title={title} text={text} date={date} position={position}/>
           </div>
           ))}
     </div>
</div>
  );
}

export default AchieveContent;