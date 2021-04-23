import react from 'react';
import "./index.css"
function Banner() {
    return (
        <div className="container-fluid" id='banner'>
            <div className="col-3 spac" ></div>
            <div className="col-3 " id="jnkImg" ><img src="/Assets/Images/Jenkins-logo.png" alt="" /></div>
            <div className="col-3 avs">
                <h1 id="jenkinsB">
                    Jenkins
                </h1>
                <p id="tagLine">
                    Build great things at any scale
                </p>
                <p id="tagDisp">
                    The leading open source automation server, Jenkins provides hundreds of plugins to support building, 
                    deploying and automating any project.
                </p>
                <button id="docButton">
                    Documentation
                </button>
                <button id="downButton">
                    Download
                </button>
            </div>
            <div className="col-3 spac">
                
            </div>
    </div>
    )
}
export default Banner;