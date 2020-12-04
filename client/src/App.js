import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SwiperContainer from './components/SwiperContainer.js'
import MenuItemBox from './components/MenuItemBox.js';
import HamburgerMenu from './components/HamburgerMenu.js'
import HeaderGlitch from './components/HeaderGlitch.js'
import FooterTabs from './components/FooterTabs.js'
import ExploreGrid from './components/ExploreGrid.js'
import SearchBox from './components/SearchBox.js';
import ForkIcon from './assets/fork-icon.png'

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
  { name: ['https://www.beatstars.com/beat/6452560', 1]},
  { name: ['https://www.beatstars.com/beat/6434495', 2]},
  { name: ['https://www.beatstars.com/beat/6425823', 3]},
  { name: ['https://www.beatstars.com/beat/6417102', 4]},
  { name: ['https://www.beatstars.com/beat/6397721', 5]},
  { name: ['https://www.beatstars.com/beat/midas-6388759', 6]}
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
    showMainComponent: "Home",
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

  setPage = (value) => {
    this.setState({showMainComponent: value});
  }

  
  render() {

    
    const { selected } = this.state;
    // Create menu from items
    // const beatMenuItems = this.beatMenuItems;
    // const topMenuItems = this.topMenuItems;
    const menu = this.menuItems;

    let showMainComponent = <div></div>
    if(this.state.showMainComponent=="Home"){
      showMainComponent = <div>
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
        <p className="marquee">
            <span className="RightToLeft"> Welcome to Anibal.Kitchen browse and find hot beats to purchase, Skerreee!</span>
          </p>
            <br/>
            <p className="marquee">
            <span className="LeftToRight"> 
                <a href="#" className="fa fa-twitter"> - </a>
                <a href="#" className="fa fa-facebook"> - </a>
                <a href="#" className="fa fa-instagram"> - </a>
              </span>
            </p>
          <br/><br/>
        <div id="DemoPlayer">
          <iframe width="360" height="240" src="https://www.youtube.com/embed/UQbknNrqxOw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <p>artist colabarations produced & using anibal kitchen beats</p>
        <p>GEEZYS</p>
        <p>TYRIAN</p>
        <p>OTHERS</p>
      </div>
    }else if(this.state.showMainComponent=="Explore"){
      showMainComponent = <div>
        <ExploreGrid></ExploreGrid>
      </div>
    }

    return (
        <div className="App">
          <HamburgerMenu id="Menu"/>
          <SearchBox />
          <FooterTabs changePage={(value) => this.setPage(value)}></FooterTabs>
          <div className="layer"></div>
          <div className="layer2"></div>
          <br/>
          
          <div id="AppHeader">
            <div className="InlineTitle">
              <div id="CenterBox">
                <img id="ForkIcon" src={ForkIcon}></img>
                <HeaderGlitch name={"ANIBAL KITCHEN"} size={"title"}/>
              </div>
            </div>
          </div>

          {showMainComponent}
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            {/* <div className="playlist-container">
              <HeaderGlitch name={"Top weekly beats"} size={"subtitle"}/>
              <ScrollMenu
                hideArrows={true}
                dragging={true}
                data={menu}
                selected={selected}
                onSelect={this.onSelect}
              />
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            <p>©ANIBAL KITCHEN 2020. ALL RIGHTS RESERVED</p>
            <br/><br/><br/><br/><br/><br/><br/>
            
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
