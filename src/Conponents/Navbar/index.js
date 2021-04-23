import React, { useState } from 'react';
import "./index.css"
function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return( 
        <div>
            <div className="navbar">
            <div className="leftSide">
                <h3 id="jenkins">Jenkins</h3>
                <img src="/Assets/cd_foundation_logo.png" alt="" id="cdLogo"/>
                <img src="/Assets/Images/drop-down-icon.png" alt="" id="cdDropDown"/>
            </div>
            <div className="rightSide">
              <div className={showLinks ? "hidden" : ""}>
              <div className={`links ${showLinks ? "hidden" : ""}`}>
                    <a href="">Blog</a>
                    <a href="">Documentation</a>
                    <img src="/Assets/Images/drop-down-icon.png" alt="" className="cdDropDown"/>
                    <a href="">Plugin</a>
                    <a href="">Community</a>
                    <img src="/Assets/Images/drop-down-icon.png" alt="" className="cdDropDown"/>
                    <a href="">Subprojects</a>
                    <img src="/Assets/Images/drop-down-icon.png" alt="" className="cdDropDown"/>
                    <a href="">About</a>
                    <img src="/Assets/Images/drop-down-icon.png" alt="" className="cdDropDown"/>
                    <a href="">English</a>
                    <img src="/Assets/Images/drop-down-icon.png" alt="" className="cdDropDown"/>
                    <button>Download</button>
                    
                </div>
                

                
              </div>
                <input type="text" placeholder="Search" id="inp"/>
                
                <img src="/Assets/Images/reorder_grey_192x192.png" alt="" id="toggle" onClick={ () => setShowLinks(!showLinks)}/>
            </div>
        </div>
        <div>
            
        </div>
        <div className={showLinks ? "margin" : ""}>
            
        </div>
        </div>
    )
}
export default Navbar;

 
 
 
 
