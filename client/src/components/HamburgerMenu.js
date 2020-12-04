import React from 'react';
import './HamburgerMenu.css'

export default class HamburgerMenu extends React.Component{
 constructor(props) {
    super(props);
  }

  

  componentDidMount(){
    const toggleClass = (el, className) => el.classList.toggle(className);

    const test = () => {
      let socialIcons = document.querySelectorAll('.menu a')
      // socialIcons.length - 1 == not selecting socialIcons.length - 1
      for (let i = 0; i < socialIcons.length - 1; i++) {
        toggleClass(socialIcons[i],'hidden')
        toggleClass(socialIcons[i],'show')
      }
    }

    let selection = document.querySelectorAll('.menu a:last-child')
    for (let i = 0; i < selection.length; i++) {
      selection[i].onclick = function() {test()}
    }
    // selection.onclick = () => {
    //   
    //   alert("yeah")
    // };
  }
  
  setOption = (value) =>{
    this.props.menuOption(value)
  }

  testAlert =(values)=>{
    alert(values," not implemented yet")
  }

  render(){
    return(
      <div className="menu">
        <a href="https://www.instagram.com/anibal.kitchen/" className="fa fa-instagram fa-2x fa-inverse f-fw hidden" ></a>
        <a href="https://www.facebook.com/anibal.kitchen.studio/" className="fa fa-facebook fa-2x fa-inverse fa-fw hidden"></a>
        <a href="https://www.youtube.com/channel/UCs9_D2RVYinWf05akyrUgcQ" className="fa fa-youtube fa-2x fa-inverse fa-fw hidden"></a>
        <a href="https://soundcloud.com/anibalsalcedo" className="fa fa-soundcloud fa-2x fa-inverse f-fw hidden"></a>
        
        <a className="fa fa-bars fa-2x fa-inverse f-fw"></a>
      </div>
    )
  }
}