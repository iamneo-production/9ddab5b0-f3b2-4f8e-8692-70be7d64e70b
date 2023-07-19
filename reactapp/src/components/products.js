import { useState } from 'react';
import './products.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function Products()
{
    const [one,setOne]=useState(0);
    const[two,setTwo]=useState(0);
    const[three,setThree]=useState(0);
    const[four,setFour]=useState(0);
    const[five,setFive]=useState(0);
    const[six,setSix]=useState(0);
    const[price1,setPrice1]=useState(867.31);
    const[price2,setPrice2]=useState(217.18);
    const[price3,setPrice3]=useState(260.09);
    const[price4,setPrice4]=useState(28099.89);
    const[price5,setPrice5]=useState(19770.56);
    const[price6,setPrice6]=useState(3989.54);
    return(
        <div className="proddiv">
            <div className="allproducts">
                <div className="prod_one">
                    <div id="prod_one_img">
                      <div id="prod_one_detail">
                            <div id="prod_one_desc">
                                    <p>Adjustable Dumbbells 25/55LB Single Dumbbell Weights, 5 in 1 Free Weights Dumbbell with Anti-Slip Metal Handle, Suitable for Home Gym Exercise Equipment</p>
                
                                    <div id="prodbtn1">
                                    <h4 style={{"marginLeft":"140px"}}>Quantity</h4>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Increase</button>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Decrease</button>
                                    </div>
                            </div>
                                    <div id="prodprice1">price :₹ {price1}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="prod_two">
                    <div id="prod_two_img">
                    <div id="prod_two_detail">
                    <div id="prod_one_desc">
                                <p>Speed Skipping Rope Adjustable Jumping Rope with Aluminium Alloy Handle and Ball Bearing Tangle-Free Exercise Rope for Home Exercise & Slim Body , Cross Fit Training, Fitness, Exercis Ideal for Aerobic Exercise</p>
                                <div id="prodbtn1">
                                    <h4 style={{"marginLeft":"140px"}}>Quantity</h4>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Increase</button>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Decrease</button>
                                    </div>
                                </div>
                                <div id="prodprice2">price :₹ {price2}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="prod_three">
                    <div id="prod_three_img">
                    <div id="prod_three_detail">
                    <div id="prod_three_desc">
                                <p>Exology Fitness 5-60 kg Grip Strengthener Exerciser – Adjustable Hand Grips Strengthener with Stainless Steel Spring for Strong Wrists, Fingers, Forearm, Hands</p>
                                <div id="prodbtn1">
                                    <h4 style={{"marginLeft":"140px"}}>Quantity</h4>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Increase</button>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Decrease</button>
                                    </div>
                                </div>
                                <div id="prodprice3">price :₹ {price3}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="prod_four">
                    <div id="prod_four_img">
                    <div id="prod_four_detail">
                    <div id="prod_four_desc">
                                <p>Niceday Steppers for Exercise, Stair Stepper with Resistance Bands, Mini Stepper with 300LBS Loading Capacity, Hydraulic Fitness Stepper with LCD Monitor</p>
                                <div id="prodbtn1">
                                    <h4 style={{"marginLeft":"140px"}}>Quantity</h4>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Increase</button>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Decrease</button>
                                    </div>
                                </div>
                                <div id="prodprice4">price : ₹{price4}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="prod_five">
                    <div id="prod_five_img">
                    <div id="prod_five_detail">
                    <div id="prod_five_desc">
                                <p>YOSUDA Magnetic/Water Rowing Machine 350 LB Weight Capacity - Foldable Rower for Home Use with LCD Monitor, Tablet Holder and Comfortable Seat Cushion</p>
                                <div id="prodbtn1">
                                    <h4 style={{"marginLeft":"140px"}}>Quantity</h4>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Increase</button>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Decrease</button>
                                    </div>
                                </div>
                                <div id="prodprice5">price :₹ {price5}</div>
                        </div>
                    </div>
                    
                </div>
                <div className="prod_six">
                    <div id="prod_six_img">
                    <div id="prod_six_detail">
                    <div id="prod_six_desc">
                                <p>Signature Fitness Cast Iron Standard Weight Plates Including 5FT Standard Barbell with Star Locks, 95-Pound Set (85 Pounds Plates + 10 Pounds Barbell), Multiple Packages</p>
                                <div id="prodbtn1">
                                    <h4 style={{"marginLeft":"140px"}}>Quantity</h4>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Increase</button>
                                    <button id="samebtneffect" style={{marginLeft:"50px","width":"100px"}}>Decrease</button>
                                    </div>
                                </div>
                                <div id="prodprice6">price :₹ {price6}</div>
                        </div>
                    </div>
                    
                </div>
                <div id="prodbackarrow"><div id="prodarrow"><Link to="/visit"> <ArrowBackIcon/></Link></div></div>
            </div>
        </div>
    )
}

export default Products;