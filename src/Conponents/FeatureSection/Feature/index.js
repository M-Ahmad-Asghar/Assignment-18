import react from "react";
import "./index.css";
const nmc = "/Assets/sectionicons/1.png";
function Feature(props) {
    return(
        <div>
            <img src={props.nmc} alt="" className="fIcon"/>
            <h5 className="fHeading">{props.heading}</h5>
            <p className="fDisk">{props.disc}</p>
        </div>
    )
}
export default Feature;