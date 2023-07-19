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
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';


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
                        
                        <h3 id="lione" onClick={toggleSideBar} >View More  ↓ </h3                                                                                                                                   >
                <nav className="navclass">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="">Motivation</Link></li> */}
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
    <div id="s-menu"class="side-menu">
        <center> <br></br><br></br><br></br>
            <h2 style={{color:"white"}}>Welcome Fitties<FitnessCenterIcon/></h2>
            <br></br>
          </center> <br/><Link to="/profile"><a href="#"><span><PersonIcon/> Profile</span></a> </Link>
           {/* <a href="#"><span><WorkspacePremiumIcon/> Premium</span></a>  */}
           <Link to="/Products"><a href="#"><span><LocalGroceryStoreIcon/>Our Products</span></a> </Link>
          <a href="#"><span><BookIcon/> Books</span></a> 
          <Link to="/Trainers"><a href="#"><span><SportsGymnasticsIcon/>  View Trainers</span></a></Link>
          <a href="#"><span><CurrencyRupeeIcon/> Payment</span></a> 
          <a href="#"><span> <SettingsIcon/>Settingṣ</span></a>
          <Link to="/Login"><a href="/Login" class="Logout"><span><LogoutIcon/> Logout</span></a></Link>
    </div>
    <div class="data" id="opreduce"> </div>
    </div>
);
}


export default Visit;