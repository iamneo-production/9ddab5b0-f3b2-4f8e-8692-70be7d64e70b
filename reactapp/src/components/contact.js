import './contactcss.css';


function Contact()
{
    return(
        <div className="wholecontact">
                <div className="contactcontent">
            <h1 id="contacth1">Contact for help</h1>
            <div className="coachnumid">
                <h3 id="numh3id">Dial +91 9345485953 for queries</h3>
                <p id="numpic">
                <img src="https://play-lh.googleusercontent.com/5-100lCTyc4ESbR5Dbka6WwstyyfEfzPKPIfGIUjdLoy2dAVt342rcnvED_RzEZujgQ" height="260" width="300"></img>
                </p> </div>
                <div className="coachemailid">
                <h3 id="numh3id">Email @ fittiesfit@gmail.com</h3>
                <p id="emailpic">
                <img src="https://shaastramag.iitm.ac.in/sites/default/files/2021-06/image264.jpeg" height="260" width="300"></img>
                </p> </div>
                <div className="coachaddressid">
                <h3 id="numh3id">New colony,9th street, Gandhipuram,Coimbatore</h3>
                <p id="addresspic">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202305/google_maps_with_ai-sixteen_nine.jpg?size=1200:675" height="260" width="300"></img>
                </p> </div>
                </div>
        </div>
    )
}

export default Contact;