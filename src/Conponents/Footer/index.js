import react from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./index.css"
function Footer() {
    return(
        <div id="footerBg">
        <Container id="footercvt">
            <Row>
                <Col md={4} sm={12}>
                 <a href="" className="footera">Improve this page  </a>
                 <span>|</span>
                 <a href="" className="footera"> Report a problem</a>
                 <img src="Assets/Images/cc.png" alt=""/>
                 <p id="footerDisc">
                 The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.
                 </p>
                </Col>
                <Col md={2} sm={12}>
                    <hr/>
                    <p className="footerSecH">
                    Resources
                    </p>
                    <a href="" className="footerSecA">Blog</a>
                    <a href="" className="footerSecA">Documentation</a>
                    <a href="" className="footerSecA">Downloads</a>
                    <a href="" className="footerSecA">Plugins</a>
                    <a href="" className="footerSecA">Security</a>
                    <a href="" className="footerSecA">Contributing</a>
                </Col>
                <Col md={2} sm={12}>
                <hr/>
                    <p className="footerSecH">
                    Project
                    </p>
                    <a href="" className="footerSecA">Structure and governance</a>
                    <a href="" className="footerSecA">Roadmap</a>
                    <a href="" className="footerSecA">GitHub</a>
                    <a href="" className="footerSecA">Jenkins on Jenkins</a>
                </Col>
                <Col md={2} sm={12}>
                <hr/>
                    <p className="footerSecH">
                    Community
                    </p>
                    <a href="" className="footerSecA">Downloads</a>
                    <a href="" className="footerSecA">Plugins</a>
                    <a href="" className="footerSecA">Security</a>
                    <a href="" className="footerSecA">Contributing</a>
                </Col>
                <Col md={2} sm={12}>
                <hr/>
                    <p className="footerSecH">
                    Others
                    </p>
                    <a href="" className="footerSecA">Documentation</a>
                    <a href="" className="footerSecA">Downloads</a>
                    <a href="" className="footerSecA">Plugins</a>
                    <a href="" className="footerSecA">Security</a>
                    <a href="" className="footerSecA">Contributing</a>
                </Col>
            </Row>
        </Container>

        </div>
    )
}
export default Footer;