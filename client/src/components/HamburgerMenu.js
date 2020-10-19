import React from 'react';
import './HamburgerMenu.css'

export default class HamburgerMenu extends React.Component{
 constructor(props) {
    super(props);
  }
  
  setOption = (value) =>{
    this.props.menuOption(value)
  }

  testAlert =(values)=>{
    alert(values," not implemented yet")
  }

  render(){
    return(
      <nav id="hamburger" role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        
        <span></span>
        <span></span> 
        <span></span>
        
        <ul id="menu">
          <a href="https://www.youtube.com/channel/UCffLaJ2xw-gt5uik6Mm0HWQ/featured" ><li >Home</li></a>
          <a href="https://www.youtube.com/channel/UCffLaJ2xw-gt5uik6Mm0HWQ"><li >Shop</li></a>
          <a href="https://www.youtube.com/watch?v=UQbknNrqxOw"><li >About</li></a>
          <a href="https://www.youtube.com/channel/UCffLaJ2xw-gt5uik6Mm0HWQ"><li >Contact Us</li></a>
        </ul>
      </div>
    </nav>
    )
  }
}