import react from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./index.css"
function OurSuppoerters() {
    return(
        <div id="supcnt">
            <Container >
                <p className="supHead">We thank the following organizations for their major commitments to support the Jenkins project.</p>
            <Row>
                <Col md={2} sm={12}>
                    <img src="Assets/Images/props/proms1.png" alt=""/>
                </Col>
                <Col md={3} sm={12}>
                    <img src="Assets/Images/props/proms2.png" alt=""/>
                </Col>
                <Col md={2} sm={12}>
                    <img src="Assets/Images/props/proms3.png" alt=""/>
                </Col>
                <Col md={2} sm={12}>
                    <img src="Assets/Images/props/proms4.png" alt=""/>
                </Col>
                <Col md={3} sm={12}>
                    <img src="Assets/Images/props/proms5.png" alt=""/>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                </Col>
                <Col md={4} sm={12}>
                <img src="Assets/Images/props/proms6.png" alt=""/>
                </Col>
                <Col md={4} sm={12}>
                <img src="Assets/Images/props/proms7.png" alt=""/>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
            <p className="supHead">We thank the following organizations
             for their support of the Jenkins project through free and/or open source licensing programs.</p>
            </Container>
        </div>
    )
}
export default OurSuppoerters;