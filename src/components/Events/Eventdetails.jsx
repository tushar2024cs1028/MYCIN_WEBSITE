import React from "react";
import "./Eventdetails.css";
import EventCard from "./EventCard";
import image1 from "../../assests/Events/FacultyInteraction/FacultyInteraction.jpeg";
import image1a from "../../assests/Events/FacultyInteraction/FacultyInteraction1.jpeg";
import image1b from "../../assests/Events/FacultyInteraction/FacultyInteraction2.jpeg";
import image1c from "../../assests/Events/FacultyInteraction/FacultyInteraction3.jpeg";
import image1d from "../../assests/Events/FacultyInteraction/FacultyInteraction4.jpeg";
import image2 from "../../assests/Events/SummerTraining/SummerTraining.jpg";
import image2a from "../../assests/Events/SummerTraining/SummerTraining1.jpg";
import image2b from "../../assests/Events/SummerTraining/SummerTraining2.jpg";
import image2c from "../../assests/Events/SummerTraining/SummerTraining3.jpg";
import image2d from "../../assests/Events/SummerTraining/SummerTraining4.jpg";
import image3 from "../../assests/Events/AIdef/Aidef.jpg";
import image3a from "../../assests/Events/AIdef/Aidef1.jpg";
import image3b from "../../assests/Events/AIdef/Aidef2.jpg";
import image3c from "../../assests/Events/AIdef/Aidef3.jpg";
import image3d from "../../assests/Events/AIdef/Aidef4.jpg";
import image4 from "../../assests/Events/Blooddonar/Blooddonar.jpeg";
import image4a from "../../assests/Events/Blooddonar/Blooddonar1.jpeg";
import image4b from "../../assests/Events/Blooddonar/Blooddonar2.jpg";
import image4c from "../../assests/Events/Blooddonar/Blooddonar3.jpg";
import image4d from "../../assests/Events/Blooddonar/Blooddonar4.jpeg";
import image5 from "../../assests/Events/SIH/SIH.jpg";
import image5a from "../../assests/Events/SIH/SIH1.jpg";
import image5b from "../../assests/Events/SIH/SIH2.jpg";
import image5c from "../../assests/Events/SIH/SIH3.jpg";
import image5d from "../../assests/Events/SIH/SIH4.jpg";
import image6 from "../../assests/Events/ReactBootcamp/ReactBootcamp.jpeg";
import image6a from "../../assests/Events/ReactBootcamp/ReactBootcamp1.jpg";
import image6b from "../../assests/Events/ReactBootcamp/ReactBootcamp2.jpg";
import image6c from "../../assests/Events/ReactBootcamp/ReactBootcamp3.jpg";
import image6d from "../../assests/Events/ReactBootcamp/ReactBootcamp4.jpeg";
import image7 from "../../assests/Events/FoundationDay/1.jpg";
import image7a from "../../assests/Events/FoundationDay/2.jpeg";
import image7b from "../../assests/Events/FoundationDay/3.jpeg";
import image7c from "../../assests/Events/FoundationDay/4.jpeg";
import image7d from "../../assests/Events/FoundationDay/5.jpeg";
import image8 from "../../assests/Events/InductionMCA/1.jpeg";
import image8a from "../../assests/Events/InductionMCA/2.jpeg";
import image8b from "../../assests/Events/InductionMCA/3.jpeg";
import image8c from "../../assests/Events/InductionMCA/4.jpeg";
import image8d from "../../assests/Events/InductionMCA/5.jpeg";
import image9 from "../../assests/Events/Lumos/2.jpeg";
import image9a from "../../assests/Events/Lumos/1.jpg";
import image9b from "../../assests/Events/Lumos/3.jpeg";
import image9c from "../../assests/Events/Lumos/4.jpeg";
import image9d from "../../assests/Events/Lumos/5.jpeg";




const Eventdetails=(probs)=>{
    const cards = [
      {
        id: 9,
        title: "Into The Web 3.0",
        image: [image9,image9a,image9b,image9c,image9d],
        text:"MYCIN at KIET Innovation center organized an online webinar on Web3 technologies & Metaverse in association with @labslumos on 25 November 2022. The start of the session was initiated by our president Archit Srivastava (@archit.1203 ). Later on Mr. Tanmay Tarte (@tanmaytarte ) of Lumos Labs continued the session and briefed everyone about various technologies like Blockchain, Crypto, NFT & Metaverse. Later on a quiz was also held in which Aryan Kaushik, Dhruv and Kartik Atri stood finished as the winners and won various swags from the company! The session ended with an address by Mr. Sachin Rathore (Head Innovation Centre).\n\n It was a highly educating and interactive session and we would like to thank ‘Lumos Labs’, Tanmay Tarte, Anshita Soni as well as our college KIET Group of Institutions (@kiet_edu ) for making this collaboration possible."
      },
      {
        id: 8,
        title: "Induction Program MCA",
        image: [image8,image8a,image8b,image8c,image8d],
        text:"Team Mycin is pleased to share a few glimpses of the Induction program conducted for the MCA first year students.We are thankful to all the speakers, members and students who attended the program."
      },
        {
          id: 7,
          title: "Foundation Day 10.10.22",
          image: [image7,image7a,image7b,image7c,image7d],
          text:"The occasion of Foundation Day is a proud day for every one as it gives them a reason to celebrate the inception. It gives us immense pleasure to share with you all that we at MYCIN will be celebrating our FIRST FOUNDATION DAY on 10 October 2022. The event will consist of the sharing of our journey, Cake cutting and a lot more activities."
        },
        {
          id: 1,
          title: "Faculty Interaction Session",
          image: [image1,image1a,image1b,image1c,image1d],
          text:"To motivate the new students coming to the club, we have organized a faculty interaction session. The main motive of this session is to encourage the students of the club to explore new ideas and to bring out the zeal inside them. All the recruited members got familiar with Innovation Center head Sachin Rathore sir as well as our faculty coordinators and mentors Sushil Kumar sir and Harsh Khatter sir."
        },
        {
          id: 2,
          title: "Summer Training Program",
          image: [image2,image2a,image2b,image2c,image2d],
          text:"Training period- 01/05/2022-30/06/2022 \n\n Felicitation- 06/09/2022 \n\n Under this summer training program, Mycin had provided 30 hours training completely focused and dedicated to all Machine Learning Algorithms. The main aim of this program was to give a brief introduction of Artificial Intelligence, Data Science, and Machine Learning and also to provide hands-on training on well-known machine learning algorithms. This training session was attended by approx. 30 machine learning enthusiasts both from first and second year. Sessions were organized and taught by some of the best brains from our club that includes – Archit Srivastava, Kushagra Srivastava and Aniket Bhardwaj. With a view to judge the skills learnt by the trainees, at last the enthusiasts were divided into teams and each team was assigned with a mentor and a project based on basic machine learning algos.The training was successfully ended with felicitation program "
          
        },
        {
          id: 3,
          title: "AiDef Conference @ Vigyan Bhawan",
          image: [image3,image3a,image3b,image3c,image3d],
          text:"On 11th July Department Of Defence Production and Ministry of Defence, Government of India organized an event AiDef(artificial intelligence in Defence) at plenary hall of Vigyaan Bhawan, New Delhi to showcase India's incorporation of AI in its Defence sector. The innovation center and MYCIN club organized a visit to the event to inspire students."
          
        },
        {
            id: 4,
            title: "World Blood Donor’s Day - 2022",
            image: [image4,image4a,image4b,image4c,image4d],
            text:"On the occasion  of World Blood Donor’s Day 2022 KIET Group of Institutions Ghaziabad , Delhi-NCR along  Post Graduate Institute of Child Health (PGICH) Noida conducted a pan India poster making competition on the theme “DONATING BLOOD IS AN ACT OF SOLIDARITY, JOIN THE EFFORT AND SAVE LIVES”.\n\n The felicitation ceremony was held on June 14th , 2022 at the Post Graduate Institute of Child Health (PGICH) , Noida. In which Dr KLA Khan , Dean-IEC and Mr. Sachin Rathore , Head-Innovation Center KIET were invited as guests. The event commenced by giving a token of welcome to all the dignitaries by Dr. Ajai Singh (Director - PGICH ) followed by opening remarks by all the esteemed guests.\n\n Three students of our college bagged prizes in the undergraduate category and were awarded with a trophy and other prizes. Team - UDDESHYA and Prof Sachin Rathore were also felicitated for their efforts in the promotion of blood donation initiatives. \n\n Winners (UG-Poster making competition from Mycin):\n\n First Prize : Archit Srivastava , BTech 2nd yr (CS) \n\nThird Prize : Vaishnavi Awasthi , BTech 2nd yr (IT)"
            
          },
          {
            id: 5,
            title: "Smart India Hackathon - 2022",
            image: [image5,image5a,image5b,image5c,image5d],
            text:"In SIH 2022 ,  Team MYCIN  provided a student coordinator team for the event of Smart India Hackathon2022’s  Grand Finale in its Hardware Edition as KIET Group of Institutions was one of the nodal centers. Student Coordinator Team was able to interact with the people of different states and has  formed many connections . Sharing of views and thoughts with different teams was the journey of awareness."
            
          },
          {
            id: 6,
            title: "React JS Bootcamp",
            image: [image6,image6a,image6b,image6c,image6d],
            text:"Mycin organized a Bootcamp on React Js which was held from 12th Sep, 2022 - 16th Sep, 2022. The bootcamp was a great success as it recorded more than 500 registrations from potential students within 36 hours of the announcement of the event. There were a limited number of seats for the bootcamp as it was the first ever bootcamp organized by Mycin so 50 students were shortlisted out of many registrations received."
            
          }    
      ];
     function SendEventExplorerToEvent(sendeventexplorertoeven){
      probs.SendEventExploreDataToApp(sendeventexplorertoeven);
     }
    return (
        <div className="Event_container ">
        <h3 className="Event_Title">Events</h3>
        <div className="Event_row">
          {cards.map(({ title, image, text,id }) => (
            <div className="Event_col" key={id}>
             
              <EventCard imageSource={image} title={title} text={text} SendEventExplorerToEvent= {SendEventExplorerToEvent}/>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Eventdetails;