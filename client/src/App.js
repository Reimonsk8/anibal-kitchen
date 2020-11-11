import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SwiperContainer from './components/SwiperContainer.js'
import MenuItemBox from './components/MenuItemBox.js';
import HamburgerMenu from './components/HamburgerMenu.js'
import HeaderGlitch from './components/HeaderGlitch.js'
import FooterTabs from './components/FooterTabs.js'

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
  { name: ['Hard Beat', 1]},
  { name: ['Soft Beat', 2]},
  { name: ['Crazy Fill', 3]},
  { name: ['Heavy Drum', 4]},
  { name: ['Synth Lead', 5]},
  { name: ['Weird Bass', 6]},
  { name: ['Slow Drum', 7]},
  { name: ['Minimal Bridge', 8]},
  { name: ['Hard Stepping', 9]},
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
          
          <div id="AppHeader">
            <HeaderGlitch name={"ANIBAL"} size={"title"}/>
            <HeaderGlitch name={"KITCHEN"} size={"title"}/>
            <br/>
            <br/>
            <p className="marquee">
              <span className="RightToLeft"> Welcome to Anibal.Kitchen browse and find hot beats to purchase, Skerreee!
              </span>
            </p>
            <br/>
            <p className="marquee">
            <span className="LeftToRight"> Find me in social media as 
                <a href="#" className="fa fa-twitter"> - </a>
                <a href="#" className="fa fa-facebook"> - </a>
                <a href="#" className="fa fa-instagram"> - </a>
              </span>
            </p>

          </div>

          <div className="playlist-container">
            <br/><br/><br/><br/><br/><br/><br/>
            <HeaderGlitch name={"Browse all beats"} size={"subtitle"}/>
            <ScrollMenu
              hideArrows={true}
              dragging={true}
              data={menu}
              selected={selected}
              onSelect={this.onSelect}
            />
          </div>
          <br/><br/>
          <p>artist colabaration produced & using anibal kitchen beats</p>
          <p>GEEZYS</p>
          <p>OTHERS</p>
          <p>TYRIAN</p>
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
            <br/><br/><br/><br/><br/>
            <p>TODO LIST pending</p>
            <p>remove errors yotube</p>
            <p>Api browse by Genre</p>
            <p>item Price link to beatport</p>
            <p>fix horizontal scrolling item to work well</p>
            <p>Item beating when played</p>
            <p>smoke particles background</p>
            <br/><br/><br/><br/><br/>
            <div className="btn__container">
              <a href="https://www.facebook.com/anibal.kitchen.studio/" className="btn">
                <i className="fab fa-instagram"></i>
                <span>instagram</span>
              </a>
                <a href="https://www.instagram.com/anibal.kitchen/?hl=es" className="btn-f">
                <i className="fab fa-facebook"></i>
                <span>facebook</span>
              </a>
            </div>
            <p>©ANIBAL KITCHEN 2020. ALL RIGHTS RESERVED</p>
            <br/><br/><br/>
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
