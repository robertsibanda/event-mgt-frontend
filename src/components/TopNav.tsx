import { ReactElement } from "react"
import home from "../img/home.png"
import settings from "../img/settings.png"
import about from "../img/about.png"

const TopNav = (): ReactElement => {
    return (
         <div className="top-nav">
          <div className="navbar-nav">
            <div className="nav-item">
              <img src={home} alt="Home icon"></img>
              <p>Home</p>
            </div>
            <div className="nav-item">
              <img src={settings} alt="Home icon"></img>
              <p>Blog</p>
            </div>
            <div className="nav-item">
              <img src={about} alt="Home icon"></img>
              <p>About</p>
            </div>
           
            </div>
          <div className="navbar-search">
            <input  className="search-box job" 
              placeholder="search job" 
              type="search"></input>
            <input  className="search-box location" 
              placeholder="location" 
              type="search"></input>
            
          </div>
        
         
        </div>
      );
        
}

export default TopNav