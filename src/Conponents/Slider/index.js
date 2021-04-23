import react from "react";
import Carousel from 'react-bootstrap/Carousel'
function Slider() {
    return(
            <Carousel style={{backgroundImage:`url("/Assets/Images/sliderImg.jpg")`,display:"block", height:"400px", width:"100%" }}>
  <Carousel.Item>
    <img  style={{position:"relative", left:"850px"}}
      className="d-block w-10"
      src="/Assets/Images/africa.PNG"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{position:"absolute", bottom:"230px", maxWidth:"300px", textAlign:"left"}}> <br/>SheCodeAfrica Contributhon</h3>
      <p style={{position:"absolute", bottom:"10px", maxWidth:"300px", textAlign:"left"}}>The SheCodeAfrica Contributhon started April 1, 2021. 
      Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. 
      The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi</p>
      <button style={{ backgroundColor: "#cf2812", 
      width: "auto",
      fontSize: "17px",
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding:  "5px 10px 5px 10px",
      borderRadius: "5px",
      border: "none",
      position: "relative",
      right: "480px",
      top: "40px",
      color: "white"
      }}>More Info</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{position:"relative", left:"850px"}}
      className="d-block w-10"
      src="/Assets/Images/jenkinscode.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{position:"absolute", bottom:"230px", maxWidth:"300px", textAlign:"left"}}>GSoC 2021: Call for student proposals</h3>
      <p style={{position:"absolute", bottom:"80px", maxWidth:"300px", textAlign:"left"}}>Jenkins project will be a mentoring organization in Google Summer of Code 2021. We are looking for students and
         mentors, join us! Applications close on April 13.</p>
         <button style={{ backgroundColor: "#cf2812", 
      width: "auto",
      fontSize: "17px",
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding:  "5px 10px 5px 10px",
      borderRadius: "5px",
      border: "none",
      right: "480px",
      position: "relative",
      color: "white"
      }}>More Info</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{position:"relative", left:"850px"}}
      className="d-block w-10"
      src="/Assets/Images/jenkinsinthway.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3  style={{position:"absolute", bottom:"230px", maxWidth:"300px", textAlign:"left"}}>Jenkins is the Way!</h3>
      <p  style={{position:"absolute", bottom:"60px", maxWidth:"300px", textAlign:"left"}}>We are looking for experiences of Jenkins users from around the world showcasing how they are building, deploying,
         and automating great software with Jenkins. Check out their user stories and share yours</p>
         <button style={{ backgroundColor: "#cf2812", 
      width: "auto",
      fontSize: "17px",
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding:  "5px 10px 5px 10px",
      borderRadius: "5px",
      border: "none",
      right: "480px",
      position: "relative",
      color: "white"
      }}>More Info</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{position:"relative", left:"850px"}}
      className="d-block w-10"
      src="/Assets/Images/jenkinsuneed.png"
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3 style={{position:"absolute", bottom:"230px", maxWidth:"300px", textAlign:"left"}}>Participate and Contribute!</h3>
      <p style={{position:"absolute", bottom:"40px", maxWidth:"300px", textAlign:"left"}}>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: 
        code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few
         hours, you can help!</p>
         <button style={{ backgroundColor: "#cf2812", 
      width: "auto",
      fontSize: "17px",
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding:  "5px 10px 5px 10px",
      borderRadius: "5px",
      border: "none",
      right: "480px",
      top: "10px",
      position: "relative",
      color: "white"
      }}>More Info</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{position:"relative", left:"850px", top:"40px"}}
      className="d-block w-10"
      src="/Assets/Images/cdcon.png"
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3 style={{position:"absolute", bottom:"230px", maxWidth:"300px", textAlign:"left"}}>cdCon</h3>
      <p style={{position:"absolute", bottom:"20px", maxWidth:"300px", textAlign:"left"}}>Join Jenkins at cdCon on June 22-25, 2021! The event is focused on improving the world's capacity to deliver 
        software with security and speed. Become part of the conversation that drives continuous delivery by meeting peers, 
        sharing ideas and talking to industry leaders on all things software delivery and DevOps.</p>
        <button style={{ backgroundColor: "#cf2812", 
      width: "auto",
      fontSize: "17px",
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding:  "5px 10px 5px 10px",
      borderRadius: "5px",
      border: "none",
      right: "480px",
      top: "30px",
      position: "relative",
      color: "white"
      }}>More Info</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    )
}
export default Slider;