import './logincss.css';
import KeyIcon from '@mui/icons-material/Key';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Signuppage from './Signup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dashboard from './dashboard';
import Visit from './visit';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login(props)
{
  const navigate=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');
  const[cons,setCons]=useState(0);
  function validate(e)
  {
    e.preventDefault();
    let cons=0;
    var error=[];
    if(username.length<5)
    {
        error.username="Please enter a valid username";
    }
    if(password.length<8)
    {
        error.password="    Wrong password";
    }
    if(username.length>=5)
    {
      cons=cons+1;
    }
    if(password.length>=8)
    {
      cons=cons+1;
    }
    setError(error);
    if(cons==2)
    {
      console.log(username);
      props.setUsernam(username);
      navigate("/visit");
    }
  }
  return(
    <div className="Logindiv">
       
            .
          <div className="logi">
          <form onSubmit={validate}>
            <div id="l1">
              <h2 id="h2id">Sign In</h2>
              
              <label id="userid"><PermIdentityIcon/><strong>Username:</strong></label>
              <input type="name" id="uiid"required placeholder="Enter your username here"  value={username} onChange={(event)=>setUsername(event.target.value)}></input>
              </div>
              <h4 id="logh4iderror" style={{color:"red"}}>{error.username}</h4>

              <div id="l2">
              
              <label id="passwordid"><KeyIcon /><strong>Password:</strong></label>
              <input type="password" id="piid" required placeholder="Enter your password here"  value={password} onChange={(event)=>setPassword(event.target.value)}></input>
              </div>
              <h4 id="logh4iderror" style={{color:"red"}}>{error.password}</h4>
              <br></br>
              <button id="lbtn"><center>Sign in</center></button>
              <br></br><br></br>
              <div id="forgotpassword">Forgot Password?</div>
              <div id="l3"><h3 id="h3id"><SentimentVeryDissatisfiedIcon/> Don't have an account ?</h3><div id="emojiid"></div></div>
              <button id="upid"><Link to="/Signuppage"><strong>SignUp</strong></Link></button>
              </form>
              
          </div>
        
    </div>
  )
}
const mapdispatchToprops=(dispatch)=>{
  return{
    setUsernam:(username)=>{
      dispatch({type:"SET_USERNAME",username:username});
    }
  }
}
export default connect(null,mapdispatchToprops)(Login);