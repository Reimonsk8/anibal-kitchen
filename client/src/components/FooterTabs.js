import React from 'react';
import './FooterTabs.css'

const FooterTabs = () => {
  return(
    <div id="menubar" >
    <ul className="menus">
      <li className="hvr-underline-from-center">{'Trap'.toUpperCase()}</li>
      <li className="hvr-underline-from-center">{'Techno'.toUpperCase()}</li>
      <li className="hvr-underline-from-center">{"Dubstep".toUpperCase()}</li>
      <li className="hvr-underline-from-center">{"Other".toUpperCase()}</li>
    </ul>
  </div>
  )
}
export default FooterTabs;