import react from "react";
import EventsComp from "./EventsComp/index";
import "./index.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Events() {
    return(
        <div >
           <Container  >
           <Row id="events">
                <Col md={3}>
                    <EventsComp eventIcon="Assets/Images/time1.png" eventHeading="CI/CD Pipelines with Jenkins and OpenShift" 
                    eventDetails="Webinar by Red Hat
                    Transforming Test-Driven Workflows Into CI/CD Pipelines With Jenkins. By using Jenkins and Red Hat® OpenShift®, you can
                    build CI/CD pipelines to automate your development process and improve time-to-market of your application"/>
                </Col>
                <Col md={3}>
                    <EventsComp eventIcon="Assets/Images/time2.png" eventHeading="Jenkins Templating Engine CDF Online Meetup" 
                    eventDetails="Steven Terrana will talk about using the Jenkins Templating Engine for Pipeline Modeling."/>
                </Col>
                <Col md={3}>
                    <EventsComp eventIcon="Assets/Images/time3.png" eventHeading="cdCon Online" eventDetails="Jenkins will be 
                    represented at cdCon organized by the Continuous Delivery Foundation. We will have multiple talks and a Birds
                    of Feather session there."/>
                </Col>
                <Col md={3}>
                    <EventsComp eventIcon="Assets/Images/time4.png" eventHeading="Jenkins Contributor Summit Online" 
                    eventDetails="The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project. The summit brings together 
                    community members to learn, meet, and help shape the future of Jenkins.
                    "
                    />
                </Col>
            </Row>
           </Container>
           
        </div>
    )
}
export default Events;