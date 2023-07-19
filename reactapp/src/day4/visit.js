import { yellow } from '@mui/material/colors';
import './visitcss.css';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Visit()
{   
    const [isOpen,setOpen]=useState(true);
    const toggleSideBar=()=>{
        if(isOpen)
        document.getElementById("s-menu").style.display="block";
        else
        document.getElementById("s-menu").style.display="none";
        setOpen(!isOpen);
    }
    
    return(
        <div className="whole">
            <div className="hide">
                        
                        <h3 id="lione" onClick={toggleSideBar} >View DashBoard  ↓ </h3                                                                                                                                   >
                <nav className="navclass">
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="">Motivation</Link></li>
                        <li><Link to="https://www.healthline.com/fitness">About</Link></li>
                        <li><Link to="https://www.anytimefitness.co.in/contact-us/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
    <div id="s-menu"class="side-menu">
        <center> <br></br><br></br><br></br>
            <h2 style={{color:"white"}}>Welcome Fitties<FitnessCenterIcon/></h2>
            <br></br>
          </center> <br/><a href="#"><span><PersonIcon/> Profile</span></a> 
           <a href="#"><span><WorkspacePremiumIcon/> Premium</span></a> 
           <Link to="/Products"><a href="#"><span><LocalGroceryStoreIcon/>Our Products</span></a> </Link>
          <a href="#"><span><BookIcon/> Books</span></a> 
          <a href="#"><span><CurrencyRupeeIcon/> Payment</span></a> 
          <a href="#"><span> <SettingsIcon/>Settingṣ</span></a>
 <a href="/Login" class="Logout"><span><LogoutIcon/> Logout</span></a>
    </div>
    <div class="data" id="opreduce"> </div>
    </div>
);
}

export default Visit;