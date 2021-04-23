import Blogpostscomp from "./BlogPostComp/index";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./index.css"
function Blogposts() {
  return (
    <div>
      <Container id="blogContainer">
        <Row id="blgspc"><h2 id="blgHeeading">Recent Blog Posts</h2></Row>
        <Container className="blogRow">

          <Row className="blogcmp">
            <Blogpostscomp blgTitle=" Easily reuse Tekton and Jenkins X from Jenkins"
              blgdisc="What is Tekton? Tekton is a powerful and flexible open-source framework for creating CI/CD systems, 
                allowing developers to build, test, and deploy across cloud providers and on-premise systems. Why use 
                Tekton? Tekton pipelines have a number of benefits: they are cloud native and designed from the ground
                 up for kubernetes each Tekton Pipeline is fully declarative and completely self described; it does not
                  depend on any separate out of..."
              blgNames="James Strachan"
              blgTags="jenkins-x kubernetes pipeline tekton gitops interoperability" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle="Jenkins Operator becomes an official sub-project!"
              blgdisc="We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project.
               What does it mean for the project? Becoming an official part of the Jenkins project was a major step towards
                better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins
                 Operator project. Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage
                  with..."
              blgNames="Bartek Antoniak, Sylwia Brant"
              blgTags="kubernetes operator contributing announcement" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle=" Welcome the SheCodeAfrica Contributhon participants!"
              blgdisc="The SheCodeAfrica Contributhon started April 1, 2021. The SheCodeAfrica Contributhon is a boot camp where African
               women are paid to work with open source organizations on selected projects with dedicated mentors. This program aims to
                create a more diverse, inclusive, and innovative culture within the African open source ecosystem 
              by matching African women in technology with sponsor and mentor open source organizations. The 5 mentees joining the..."
              blgNames="Mark Waite"
              blgTags="community governance governance-board" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle=" Easily reuse Tekton and Jenkins X from Jenkins"
              blgdisc="What is Tekton? Tekton is a powerful and flexible open-source framework for creating CI/CD systems, 
                allowing developers to build, test, and deploy across cloud providers and on-premise systems. Why use 
                Tekton? Tekton pipelines have a number of benefits: they are cloud native and designed from the ground
                 up for kubernetes each Tekton Pipeline is fully declarative and completely self described; it does not
                  depend on any separate out of..."
              blgNames="James Strachan"
              blgTags="jenkins-x kubernetes pipeline tekton gitops interoperability" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle="Jenkins Operator becomes an official sub-project!"
              blgdisc="We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project.
               What does it mean for the project? Becoming an official part of the Jenkins project was a major step towards
                better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins
                 Operator project. Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage
                  with..."
              blgNames="Bartek Antoniak, Sylwia Brant"
              blgTags="kubernetes operator contributing announcement" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle=" Welcome the SheCodeAfrica Contributhon participants!"
              blgdisc="The SheCodeAfrica Contributhon started April 1, 2021. The SheCodeAfrica Contributhon is a boot camp where African
               women are paid to work with open source organizations on selected projects with dedicated mentors. This program aims to
                create a more diverse, inclusive, and innovative culture within the African open source ecosystem 
              by matching African women in technology with sponsor and mentor open source organizations. The 5 mentees joining the..."
              blgNames="Mark Waite"
              blgTags="community governance governance-board" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle=" Easily reuse Tekton and Jenkins X from Jenkins"
              blgdisc="What is Tekton? Tekton is a powerful and flexible open-source framework for creating CI/CD systems, 
                allowing developers to build, test, and deploy across cloud providers and on-premise systems. Why use 
                Tekton? Tekton pipelines have a number of benefits: they are cloud native and designed from the ground
                 up for kubernetes each Tekton Pipeline is fully declarative and completely self described; it does not
                  depend on any separate out of..."
              blgNames="James Strachan"
              blgTags="jenkins-x kubernetes pipeline tekton gitops interoperability" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle="Jenkins Operator becomes an official sub-project!"
              blgdisc="We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project.
               What does it mean for the project? Becoming an official part of the Jenkins project was a major step towards
                better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins
                 Operator project. Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage
                  with..."
              blgNames="Bartek Antoniak, Sylwia Brant"
              blgTags="kubernetes operator contributing announcement" />
          </Row>
          <Row className="blogcmp">
            <Blogpostscomp blgTitle=" Welcome the SheCodeAfrica Contributhon participants!"
              blgdisc="The SheCodeAfrica Contributhon started April 1, 2021. The SheCodeAfrica Contributhon is a boot camp where African
               women are paid to work with open source organizations on selected projects with dedicated mentors. This program aims to
                create a more diverse, inclusive, and innovative culture within the African open source ecosystem 
              by matching African women in technology with sponsor and mentor open source organizations. The 5 mentees joining the..."
              blgNames="Mark Waite"
              blgTags="community governance governance-board" />
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Blogposts;