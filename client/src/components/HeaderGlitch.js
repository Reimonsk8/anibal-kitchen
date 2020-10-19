  
import React from 'react'
import './HeaderGlitch.css'

//segment glitch background
const HeaderGlitch = ({name, size}) => {
    return(
      <div id="background">
        <div className={size}>
          <h1 className="glitch" data-text={name}>{name}</h1>
        </div>
      </div>
    )
  }

export default HeaderGlitch;