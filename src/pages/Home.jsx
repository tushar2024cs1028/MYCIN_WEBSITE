import React from 'react';

import Announcement from "../components/Anouncement/Anouncement.jsx";
import Firstsection from '../components/first-section/firstsection';
import Secondsection from '../components/secondsection/secondsection';
    
const Home=()=>{
    return (
    <div>
        
        <Firstsection/>
        <Secondsection/>
        <Announcement/>
    </div>
    );
};
export default Home;