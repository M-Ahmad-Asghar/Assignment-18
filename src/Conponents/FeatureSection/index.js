import react from "react";
import Feature from "./Feature/index"
import "./index.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { propTypes } from "react-bootstrap/esm/Image";
function FeatureSection() {
    return(
        <div className="container-fluid FeatureSectionBg">
       <Container >
  <Row>
      <Col sm={2} md={1}>
        <Feature nmc="/Assets/sectionicons/1.png"/>
      </Col>
  <Col sm={10} md={3}>
        <Feature   heading="Continuous Integration and Continuous Delivery" disc="As an extensible 
        automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."/>
    </Col>
    <Col sm={2} md={1}>
        <Feature nmc="/Assets/sectionicons/2.png"/>
      </Col>
    <Col sm={10} md={3}>
     <Feature heading="Easy installation" disc="Jenkins is a self-contained Java-based program,
      ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems."/>
    </Col>
    <Col sm={2} md={1}>
        <Feature nmc="/Assets/sectionicons/3.png"/>
      </Col>
    <Col sm={10} md={3}>
        <Feature heading="Easy configuration" disc="Jenkins can be easily set up and configured 
        via its web interface, which includes on-the-fly error checks and built-in help."/>
    </Col>
  </Row>
  <Row>
  <Col sm={2} md={1}>
        <Feature nmc="/Assets/sectionicons/4.png"/>
      </Col>
    <Col xs={10} md={3}>
        <Feature heading="Plugins" disc="With hundreds of plugins in the Update Center, Jenkins
         integrates with practically every tool in the continuous integration and continuous delivery toolchain."/>
    </Col>
    <Col sm={2} md={1}>
        <Feature nmc="/Assets/sectionicons/5.png"/>
      </Col>
    <Col xs={10} md={3}>
        <Feature heading="Extensible" disc="Jenkins can be extended via its plugin architecture, providing nearly 
        infinite possibilities for what Jenkins can do."/>
    </Col>
    <Col sm={2} md={1}>
        <Feature nmc="/Assets/sectionicons/6.png"/>
      </Col>
    <Col xs={10} md={3}>
        <Feature heading="Distributed" disc="Jenkins can easily distribute work across multiple machines, helping drive builds, 
        tests and deployments across multiple platforms faster."/>
    </Col>
  </Row>
</Container>

        </div>
        
    )
}
export default FeatureSection;