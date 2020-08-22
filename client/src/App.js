import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SwiperContainer from './components/SwiperContainer.js'
import MenuItemBox from './components/MenuItemBox';
import icon from './favicon.ico'

const beatList = [
  { name: 'Beat 1' },
  { name: 'Beat 2' },
  { name: 'Beat 3' },
  { name: 'Beat 4' },
  { name: 'Beat 5' },
  { name: 'Beat 6' },
  { name: 'Beat 7' },
  { name: 'Beat 8' },
  { name: 'Beat 9' }
];
const topList = [
  { name: 'Top 1' },
  { name: 'Top 2' },
  { name: 'Top 3' },
  { name: 'Top 4' },
  { name: 'Top 5' }
];

export const Menu = (topList, selected) =>
  topList.map(el => {
    const {name} = el;
    return <MenuItemBox text={name} key={name} selected={selected} />;
  });


const selectedBeat = 'Beat 2';
const selectedTop = 'Top 1';
const selected = "Top 2";

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(topList, selected);
    this.beatMenuItems = SwiperContainer(beatList, selectedBeat);
    this.topMenuItems = SwiperContainer(topList, selectedTop);
  }
 
  state = {
    selectedBeat,
    selectedTop,
    selected,
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: beatList.length,
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
    const beatMenuItems = this.beatMenuItems;
    const topMenuItems = this.topMenuItems;
    const menu = this.menuItems;

    return (
      <div className="playlist-container">
        <h1>Anibal.Kitchen</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
        <i>{icon}</i>
        <h3>Browse Beats</h3>
        <ScrollMenu
          data={beatMenuItems}
          selected={selected}
          onSelect={this.onSelect}
        />

        <i>{icon}</i>
        <h3>Weekly Top Featured</h3>
        <ScrollMenu
          data={menu}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default App;
