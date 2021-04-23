import react from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./index.css"
function Blogpostscomp(props) {
return(
    <div>
        <Container id="blogPostcont">
            <Row >
                <Col md={11} xsm={11} id="blogupperRow">
                <img src="Assets/Images/date.png" alt="" id="blgIconDate"/><h4 id="blogLinkHeading">
                    {props.blgTitle}</h4>
                </Col>
            </Row>
            <Row id="blogdetails">
                    <p>{props.blgdisc}</p>
            </Row>
            <Row>
                    <p id="blgNames">{props.blgNames}</p>
            </Row>
            <Row id="tgRow">
                    <p id="blgTags">{props.blgTags}</p>
            </Row>
        </Container>
    </div>
)
}
export default Blogpostscomp;