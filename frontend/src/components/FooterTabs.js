import React from 'react';
import './FooterTabs.css';
import * as IoIcons from 'react-icons/io';

const FooterTabs = ({changePage}) => {
  return(
    <div id="menubar" >
    <ul className="menus">
      <li onClick={ () => changePage("Home")} className="hvr-underline-from-center"><IoIcons.IoMdHome/></li>
      <li onClick={ () => changePage("Explore")} className="hvr-underline-from-center"><IoIcons.IoMdCompass/></li>
    </ul>
  </div>
  )
}
export default FooterTabs;