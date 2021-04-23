import Navbar from "./Conponents/Navbar/index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Conponents/Banner/index";
import Slider from "./Conponents/Slider/index"; 
import FeatureSection from "./Conponents/FeatureSection/index";
import EmbedVideo from "./Conponents/EmbededVideo/index";
import Events from "./Conponents/Events/index";
import Blogposts from "./Conponents/BlogPosts/index";
import OurSuppoerters from "./Conponents/OurSupporters/index";
import Footer from "./Conponents/Footer/index";
function App() {
  return ( 
    <div className="App">
     <Navbar />
     <Banner />
     <Slider />
     <FeatureSection />
     <EmbedVideo />
     <Events />
     <Blogposts />
     <OurSuppoerters />
     <Footer />
    </div>
  );
}

export default App;
