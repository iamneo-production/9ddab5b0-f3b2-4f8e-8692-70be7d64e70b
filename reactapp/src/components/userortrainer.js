import './userortrainercss.css';
import { Link } from 'react-router-dom';
function Choose()
{
    return(
    <div className="choosediv">
        <body>
            {/* <img src="https://wallpaperaccess.com/full/5691564.jpg" height="100%" width="100%"></img>  */}
            <Link to="/Login">
        <div className="clientdiv">
            <h3 id="userh3">Client</h3>
            <div id="userpic">
                <img src="https://www.computerhope.com/jargon/e/end-user.png" height="240" width="260"></img>
            </div>
        </div>
        </Link>
        <Link to="/Login">
        <div className="trainerdiv">
        <h3 id="trainerh3">Trainer</h3>
        <div id="trainerpic">
            <img src="https://b.fssta.com/uploads/application/wwe/headshots/dwayne-the-rock-johnson.png" height="280px" width="300px"></img>
        </div>
        </div>
        </Link>
        </body>
    </div>
    )
}
export default Choose;

