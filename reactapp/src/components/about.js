import './aboutcss.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

function About()
{
    return(
        <div className="wholeabout">
               
                <div className="aboutcontent">
                <div id="a1">
                                <p><h2>
                                HighLights</h2>
                                </p>
                                
                            </div>
                    <h1 id="abouth1">ABOUT US</h1>
                    <div id="aboutcontent1">
                            <p id="content1pad">FOUNDER'S STORY<br></br>
“In 2018, I was serving as a corpsman for the United States Coast Guard and on track to enter nursing school upon completion of my service in the military.
 While riding my motorcycle and on my way to pick up my last nursing book, I was hit by a distracted driver. I suffered severe trauma including brain bleeds, broken bones, and countless other painful injuries.
 Doctors told me that if I hadn't been eating healthy foods or staying active, I would have died...   
That was a HUGE wake up call for me. I started thinking about all the young people who didn't know about good nutrition or physical fitness, or those who just didn't have access to a healthy lifestyle. I didn't realize what a difference healthy living makes until my life was literally on the line. Not everyone has the resources or tools they need to live a healthy lifestyle, and I want to change that.” Jacob McDonnell  </p>
                    </div>
                    <div id="aboutcontent2">
                        <p id="content2pad">Incorporated September 18th, 2020, BlueLight Health was founded on the premise that good health saves lives.  
BlueLight serves youth, and vulnerable families in the Central Florida area to achieve good health and wellness through training, education, and by creating an environment of togetherness. Students need more hands-on education in health and wellness (diet, physical activity, and mental health), parent involvement, and self-efficacy to carry on what they've learned and together, we will empower and equip our communities to achieve healthy habits!  
Our three core programs include The Youth Initiative, 360 Health, and BlueLight Connect, and they are offered free or low-cost to eliminate barriers to leading a healthy lifestyle. 
You, as a part of BlueLight Health, can help transform our youth and families in Central Florida. Improved health makes it possible for people to overcome poor health outcomes and live a life that is happy and prosperous.
 </p>
                    </div>
                    



                </div>
                <div className="abouttextcontents">
                    <div id="akp1">
                    <p>At BlueLight Health, we are committed to serve our youth by empowering them with the tools and knowledge they need to live healthier lives, encouraging them to believe in themselves and by building a community that supports their efforts. 
                        It is our responsibility to constantly improve so that we can best serve the community, while constantly upholding the dignity and rights of every human being.
                        Students need more hands-on education in health and wellness (diet, physical activity, and mental health), parent involvement, and self-efficacy to carry on what they've learned and together,</p>
                        </div>
                        <br></br><br></br><br></br>
                        <div id="akp2">
                    <p><h2>EMPOWERMENT</h2><br></br>
To equip people with the training, tools, and sense of purpose necessary to take control of their health outcomes. When individuals are empowered to take ownership, better outcomes are achieved all around. 

DIVERSITY & INCLUSION
We believe in upholding the dignity of every human being and their right to live well, regardless of background or life circumstances. We strive to create an inclusive and welcoming community centered on kindness, compassion, and nonjudgmental support.  </p>
                        </div>
                        <br></br><br></br><br></br>
                        <div id="akp3">
                    <p ><h2>COMMITMENT TO SERVE</h2><br></br>
BlueLight Health is committed to going above and beyond for the people we serve, exceeding every expectation. We put the needs of others first, serving them to the best of our abilities.

ENCOURAGEMENT
We want to lift the spirits of the people we serve, helping them believe in themselves as they meet challenges to improving their health.</p>
                        </div>
                </div>
                <div id="aboutbackbutton">
                    
                    <Link to="/visit"><center><h5>Go back 🔙</h5></center></Link>
            </div>
        </div>
    )
}


export default About;