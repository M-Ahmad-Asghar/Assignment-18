import react from "react";
import "./index.css"
function EventsComp(props) {
    return(
        <div id="eventsTab">
            <img src={props.eventIcon} alt="" id="eventIcon"/>
            <h6 id="eventsHeading">{props.eventHeading}</h6>
            <p id="eventsDetails">{props.eventDetails}</p>
        </div>
    )
}
export default EventsComp;