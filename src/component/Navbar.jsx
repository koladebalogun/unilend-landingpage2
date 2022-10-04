import React,{ useState } from "react";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import drop from "../assets/drop.png";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>

      <nav>
        <div className="navBarContainer">
          <div className="mainLogoContainer">
            <img src={logo} alt="mainlogo" className="mainLogo" id="mainlogo" />
          </div>
          <div className="header">
            <li>Home</li>

            <li onClick={() => setDropDown(!dropDown)}>
              Developers 
              <img src={drop} alt="" className="dropicon"/>
            </li>

            {dropDown && (
            <div className="nav-dropDown">
              <ul>
                <li>
                  <a href="https://unilend.gitbook.io/unilend-finance/" style={{color:'#202F44', textDecoration:'none'}}>
                    Gitbook
                  </a>
                </li>
                <li>
                  <a href="https://unilend.gitbook.io/unilend-finance/whitepaper" style={{color:'#202F44', textDecoration:'none'}}>
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>
            )}

            <li>
              <a href="https://unilend.medium.com/" style={{color:'#202f44', textDecoration:'none'}}>Blogs</a>
            </li>
            <li>
              <a href="https://bit.ly/3fk1AwZ" style={{color:'#202f44', textDecoration:'none'}}>Brand Kit</a>
            </li>
            {/* <li>
            <input type="checkbox" onclick="myFunction()">
            <label className="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
            </label>
            </li> */}
            <div className="btnContainer">
              <button className="appBtn">
                <a href="https://unilendv2-testnet.netlify.app/" style={{color:'#fff', textDecoration:'none'}}>App</a>
              </button>
            </div>
          </div>
          <GiHamburgerMenu className="toggleContainer" style={{color:'#0045ff', width:'25px', height:'25px'}}/>
        </div>
      </nav>
    </div>
  );
}
