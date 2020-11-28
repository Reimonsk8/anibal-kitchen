import React from 'react';
import './FooterTabs.css'
import Home from "../assets/Home.png"
import Explore from "../assets/explore.png"

const FooterTabs = ({changePage}) => {
  return(
    <div id="menubar" >
    <ul className="menus">
      <li onClick={ () => changePage("Home")} className="hvr-underline-from-center"><img src={Home}/></li>
      <li onClick={ () => changePage("Explore")} className="hvr-underline-from-center"><img src={Explore}/></li>
    </ul>
  </div>
  )
}
export default FooterTabs;