import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SwiperContainer from './components/SwiperContainer.js'
import MenuItemBox from './components/MenuItemBox.js';
import HamburgerMenu from './components/HamburgerMenu.js'
import HeaderGlitch from './components/HeaderGlitch.js'
import FooterTabs from './components/FooterTabs.js'
// import icon from './favicon.ico';
import './assets/fonts.css';

// const beatList = [
//   { name: 'Beat 1' },
//   { name: 'Beat 2' },
//   { name: 'Beat 3' },
//   { name: 'Beat 4' },
//   { name: 'Beat 5' },
//   { name: 'Beat 6' },
//   { name: 'Beat 7' },
//   { name: 'Beat 8' },
//   { name: 'Beat 9' }
// ];
const topList = [
  { name: ['Top 1 Hard Beat', 1]},
  { name: ['Top 2 Soft Beat', 2]},
  { name: ['Top 3 Crazy Fill', 3]},
  { name: ['Top 4 Heavy Drum', 4]},
  { name: ['Top 5 Synth Lead', 5]},
  { name: ['Top 6 Weird Bass', 6]},
  { name: ['Top 7 Slow Drum', 7]},
  { name: ['Top 8 Minimal Bridge', 8]},
  { name: ['Top 9 Hard Stepping', 9]},
];

export const Menu = (topList, selected) =>
  topList.map(el => {
    const {name} = el;
    return <MenuItemBox text={name} key={name} selected={selected} />;
  });


// const selectedBeat = 'Beat 2';
const selectedTop = 'Top 1';
const selected = "Top 2";

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(topList, selected);
    // this.beatMenuItems = SwiperContainer(beatList, selectedBeat);
    this.topMenuItems = SwiperContainer(topList, selectedTop);
  }
 
  state = {
    // selectedBeat,
    selectedTop,
    selected,
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    // itemsCount: beatList.length,
    scrollToSelected: false,
    translate: 0,
    transition: 0.3,
    wheel: true
  };
 
  onSelect = key => {
    this.setState({selected: key });
  }
  
  render() {
    const { selected } = this.state;
    // Create menu from items
    // const beatMenuItems = this.beatMenuItems;
    // const topMenuItems = this.topMenuItems;
    const menu = this.menuItems;

    return (
        <div className="App">
          <HamburgerMenu id="Menu"/>
          <FooterTabs></FooterTabs>
          <div className="layer"></div>
          <div className="layer2"></div>
          <br/><br/><br/>
          
          <HeaderGlitch name={"ANIBAL"} size={"title"}/>
          <HeaderGlitch name={"KITCHEN"} size={"title"}/>
          <div className="playlist-container">
            <img src={logo} className="App-logo" alt="logo" />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <HeaderGlitch name={"Browse all beats"} size={"subtitle"}/>
            <ScrollMenu
              hideArrows={true}
              dragging={true}
              data={menu}
              selected={selected}
              onSelect={this.onSelect}
            />
          </div>
          
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="playlist-container">
              <HeaderGlitch name={"Top weekly beats"} size={"subtitle"}/>
              <ScrollMenu
                hideArrows={true}
                dragging={true}
                data={menu}
                selected={selected}
                onSelect={this.onSelect}
              />
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            {/* <div className="btn__container">
              <a href="https://www.facebook.com/anibal.kitchen.studio/" className="btn">
                <i className="fab fa-instagram"></i>
                <span>instagram</span>
              </a>
                <a href="https://www.instagram.com/anibal.kitchen/?hl=es" className="btn-f">
                <i className="fab fa-facebook"></i>
                <span>facebook</span>
              </a>
            </div> */}
            <p>©ANIBAL KITCHEN 2020. ALL RIGHTS RESERVED</p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <p>TODO LIST pending</p>
            <ul>
              <i>scrolling down on mobile</i><br></br>
              <i>fonts google</i><br></br>
              <i>remove errors yotube</i>
              <i>Api browse by Genre</i><br></br>
              <i>item Price link to beatport</i><br></br>
              <i>fix horizontal scrolling item to work well</i><br></br>
              <i>Item beating when played</i><br></br>
              <i>smoke particles background</i><br></br>
            </ul>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
        </div>
    );

      
  //   let stuff = <div>
  //   <i>{icon}</i>
  //   <h3>Browse Beats</h3>
  //   <ScrollMenu
  //         // data={beatMenuItems}
  //         selected={selected}
  //         onSelect={this.onSelect}
  //       />


  // <HeaderGlitch name={title}/>
  // 
  //   <i>{icon}</i>


  //               
  // </div>              

  }
}

export default App;
