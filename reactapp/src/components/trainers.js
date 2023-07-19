import './trainerscss.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Trainers()
{
    const[t1name,setT1name]=useState("John Cena");
    const[t1trainerid,setT1trainerid]=useState(66511);
    const[t1charge,setT1charge]=useState("8500");
    const[t2name,setT2name]=useState("Shyamala");
    const[t2trainerid,setT2trainerid]=useState(66512);
    const[t2charge,setT2charge]=useState("7000");
    const[t3name,setT3name]=useState("King Kohli");
    const[t3trainerid,setT3trainerid]=useState(66513);
    const[t3charge,setT3charge]=useState("9000");
    const[t4name,setT4name]=useState("Preethi");
    const[t4trainerid,setT4trainerid]=useState(66514);
    const[t4charge,setT4charge]=useState("7800");
    const[t5name,setT5name]=useState("Bill Goldberg");
    const[t5trainerid,setT5trainerid]=useState(66515);
    const[t5charge,setT5charge]=useState("8000");
    const[t6name,setT6name]=useState("Sara");
    const[t6trainerid,setT6trainerid]=useState(66516);
    const[t6charge,setT6charge]=useState("8800");


    return(
        <div className="wholetrainers">
            
                <div className="trainerscontent">
                    
                </div>
                <div className="trainer1">
                    
                    <div id="trainer1desc">
                    <h3 id="h3trainerid">Trainer Name: {t1name}</h3>
                    <h3 id="h3trainerid">Trainer Id: {t1trainerid}</h3>
                    <h3 id="h3trainerid">Charge: ₹ {t1charge}</h3>
                    </div>
                    <div id="trainer1pic">
                    <img src="https://staticg.sportskeeda.com/editor/2023/02/a7227-16752447762662-1920.jpg" height="250" width="300"></img>
                    </div>
                    <div id="rightcertified">
                        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500896.png" height="100px" weight="100px"></img>
                    </div>
                    <div id="rchoose">
                        <button id="buttonchoose">Choose Trainer</button>
                    </div>
                </div>
                <div className="trainer2">
                    
                    <div id="trainer2desc">
                    <h3 id="h3trainerid">Trainer Name: {t2name}</h3>
                    {/* <br></br> */}
                    <h3 id="h3trainerid">Trainer Id: {t2trainerid}</h3>
                    <h3 id="h3trainerid">Charge: ₹ {t2charge}</h3>
                    </div>
                    <div id="trainer2pic">
                    <img src="https://www.theemergingindia.com/wp-content/uploads/2019/12/richi-shah-in-gym.jpg" height="250" width="250"></img>
                    </div>
                    <div id="leftcertified">
                        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500896.png" height="100px" weight="100px"></img>
                    </div>
                    <div id="lchoose">
                        <button id="buttonchoose">Choose Trainer</button>
                    </div>
                    
                </div>
                <div className="trainer3">
                    
                    <div id="trainer3desc">
                        <h3 id="h3trainerid">Trainer Name: {t3name}</h3>
                        {/* <br></br> */}
                    <h3 id="h3trainerid">Trainer Id: {t3trainerid}</h3>
                    <h3 id="h3trainerid">Charge: ₹ {t3charge}</h3>
                    </div>
                    <div id="trainer3pic">
                    <img src="https://www.health-yogi.com/wp-content/uploads/2019/04/IMG_20190428_204333.jpg" height="250" width="300"></img>
                    </div>
                    <div id="rightcertified">
                        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500896.png" height="100px" weight="100px"></img>
                    </div>
                    <div id="rchoose">
                        <button id="buttonchoose">Choose Trainer</button>
                    </div>
                </div>
                <div className="trainer4">
                  
                    <div id="trainer4desc">
                    <h3 id="h3trainerid">Trainer Name: {t4name}</h3>
                    {/* <br></br> */}
                    <h3 id="h3trainerid">Trainer Id: {t4trainerid}</h3>
                    <h3 id="h3trainerid">Charge: ₹ {t4charge}</h3>
                    </div>
                    <div id="trainer4pic">
                    <img src="https://i1.wp.com/pixahive.com/wp-content/uploads/2020/08/Female-gym-trainer-25362-pixahive.jpg" height="250" width="250"></img>
                    </div>
                    <div id="leftcertified">
                        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500896.png" height="100px" weight="100px"></img>
                    </div>
                    <div id="lchoose">
                        <button id="buttonchoose">Choose Trainer</button>
                    </div>
                </div>
                <div className="trainer5">
                    
                    <div id="trainer5desc">
                    <h3 id="h3trainerid">Trainer Name: {t5name}</h3>
                    {/* <br></br> */}
                    <h3 id="h3trainerid">Trainer Id:  {t5trainerid}</h3>
                    <h3 id="h3trainerid">Charge: ₹ {t5charge}</h3>
                    </div>
                    <div id="trainer5pic">
                    <img src="https://i.pinimg.com/originals/d3/fe/bb/d3febb6e804b65bc9e53b04bca2ab8bc.jpg" height="250" width="300"></img>
                    </div>
                    <div id="rightcertified">
                        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500896.png" height="100px" weight="100px"></img>
                    </div>
                    <div id="rchoose">
                        <button id="buttonchoose">Choose Trainer</button>
                    </div>
                </div>
                <div className="trainer6">
                    
                    <div id="trainer6desc">
                    <h3 id="h3trainerid">Trainer Name: {t6name}</h3>
                    <h3 id="h3trainerid">Trainer Id: {t6trainerid}</h3>
                    <h3 id="h3trainerid">Charge: ₹ {t6charge}</h3>
                    </div>
                    <div id="trainer6pic">
                    <img src="https://i.pinimg.com/736x/7c/c5/ad/7cc5ad5a571a9252c42d49007a8fd70d.jpg" height="250" width="200"></img>
                    </div>
                    <div id="leftcertified">
                        <img src="https://cdn-icons-png.flaticon.com/512/3500/3500896.png" height="100px" weight="100px"></img>
                    </div>
                    <div id="lchoose">
                        <button id="buttonchoose">Choose Trainer</button>
                    </div>
                </div>
                <div id="trainersbackbutton">
                    
                    <Link to="/visit"><center><h5>Go back 🔙</h5></center></Link>
            </div>
        </div>
    )
}

export default Trainers;