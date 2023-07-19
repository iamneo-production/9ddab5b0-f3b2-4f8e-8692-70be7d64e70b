import './profilecss.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
function Profile(props)
{
    const [name,setName]=useState(props.username);
    const [contact,setContact]=useState("9345485953");
    const [existingplan,setExistingplan]=useState("Chest-566");
    const [products,setProducts]=useState("Dumbbell");
    const [trainerid,setTrainerid]=useState();
    return(
        <div className="profileclass">
                <div className="profiletablet">
                        <div className="tablet_image">
                            
                        </div>
                    <img src="https://ouch-cdn2.icons8.com/WAltksxBondfF6n72LHf5xR4BZa7R06tCDlWUb7tFGU/rs:fit:256:204/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODYz/L2ZmYmFlYWM1LWNh/MWYtNDM5NS05ZGFl/LTMwNTY5NWY2ZDcz/Yi5zdmc.png" height="450px" width="400px"></img>
                </div>
                <div className="profilephone">
                       <div className="phone_name">

                       </div>
                       <div id="img">
                
                <div id="akname">
                    <h4 id="akinp">Name:{name}</h4>
                </div>
                <div id="akmobile">
                    <h4 id="akinp">Contact:{contact}</h4>
                </div>
                <div id="akexistingplan">
                    <h4 id="akinp">Existing Plan:{existingplan}</h4>
                </div>
                <div id="akproducts">
                    <h4 id="akinp">Products:{products}</h4>
                </div>
                   
                </div>
                </div>
               <div id="backarrow"><div id="arrow"><Link to="/visit"> <ArrowBackIcon/></Link></div></div>
        </div>
    )
}
const mapStateToProps=(state)=>
{
    return{
        username: state.username
    }
}

export default connect(mapStateToProps)(Profile);