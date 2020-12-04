import React from 'react';
import './ExploreGrid.css'
import HeaderGlitch from './HeaderGlitch';
import './HeaderGlitch.css'

const ExploreGrid = () => {
  return(
    <div>
      
      <br/><br/><br/><br/>
      <div className="ContainerTitle">
        <div className="HeaderTitle">
          {/* <HeaderGlitch name={"Explore"} size={"title"}/> */}
          <h1></h1>
        </div>
      </div>
      <div id="ExploreGrid" >
          <div className="Rap"><p>Rap</p></div>
          <div className="Trap"><p>Trap</p></div>
          <div className="Regueton"><p>Regueton</p></div>
          <div className="Electronic"><p>Electronic</p></div>
          <div className="Sale"><p>Sale</p></div>
          <div className="Free"><p>Free</p></div>
      </div>
    </div>
  )
}
export default ExploreGrid;