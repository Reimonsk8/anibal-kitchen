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
          <h1>EXPLORE</h1>
        </div>
      </div>
      <div id="ExploreGrid" >
          <div className="Rap">Rap</div>
          <div className="Trap">Trap</div>
          <div className="Regueton">Regueton</div>
          <div className="Electronic">Electronic</div>
          <div className="Sale">Sale</div>
          <div className="Free">Free</div>
      </div>
    </div>
  )
}
export default ExploreGrid;