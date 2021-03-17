import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SwiperContainer from './components/SwiperContainer.js'
import HorizontalMenu from './components/HorizontalMenu.js'
import MenuItemBox from './components/MenuItemBox.js';
import HamburgerMenu from './components/HamburgerMenu.js'
import HeaderGlitch from './components/HeaderGlitch.js'
import FooterTabs from './components/FooterTabs.js'
import ExploreGrid from './components/ExploreGrid.js'
import SearchBox from './components/SearchBox.js';
import ForkIcon from './assets/fork-icon.png'
import axios from 'axios';

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const Menu = (list, selected) =>
  list.map(el => {
    const {title, beatstartlink} = el;
    //returning menuItem
    return <MenuItemBox text={title} link={beatstartlink} key={title} selected={selected} />;
  });

  const MenuItem = ({text, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >{text}</div>;
  };

  export const Menu2 = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

  const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
  ];
    
export const ArrowLeft = Arrow({ text: "<-", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: "->", className: "arrow-next" });

function App(){

  const [jsonItems, setJsonItems] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [showMainComponent, setMainComponent] = useState("Home");
  const [selected, setSelected] = useState('');
  const [selected2, setSelected2] = useState('item1');
  const [menuItems2] = useState(Menu2(list, selected2));
  const {alignCenter} = useState(true);

  const ArrowLeft2 = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight2 = Arrow({ text: '>', className: 'arrow-next' });

  const onSelect2 = (key) => {
    setSelected2(key);
  }

  useEffect(() => {
    // const progressBarContainer = document.querySelector("#progressBarContainer");
    // const progressBar = document.querySelector("#progressBar");
    // let totalPageHeight = document.body.scrollHeight - window.innerHeight;
    // let debounceResize;

    // window.addEventListener("scroll", () => {
    //   let newProgressHeight = window.pageYOffset / totalPageHeight;
    //   progressBar.style.transform = `scale(1,${newProgressHeight})`;
    //   progressBar.style.opacity = `${newProgressHeight}`;
    // }, {
    //   capture: true,
    //   passive: true
    // });

    // window.addEventListener("resize", () => {
    //   clearTimeout(debounceResize);
    //   debounceResize = setTimeout(() => {
    //     totalPageHeight = document.body.scrollHeight - window.innerHeight;
    //   }, 250);
    // });

    // progressBarContainer.addEventListener("click", (e) => {
    //   let newPageScroll = e.clientY / progressBarContainer.offsetHeight * totalPageHeight;
    //   window.scrollTo({
    //     top: newPageScroll,
    //     behavior: 'smooth'
    //   });
    // });
    const getJsonItems = async () =>{
      await axios.get('myBeatList.json').then(response =>{
        setJsonItems(response.data.data)
      }).catch((err)=> {
        console.log(err.response.data)
      });
    }
    getJsonItems()
    // setSelected(true)
  },[]);

  const updateSearchInput = (inputSearch = "") =>{
    setInputSearch(inputSearch)
  }

  const getSearchFilterData = () =>{
    return jsonItems.filter((item) => item.title.toLowerCase().includes(inputSearch.toLowerCase()))
  }

  const getMatchedItems = () =>{
    return getSearchFilterData()
  }
 
  const onSelect = (key) => {
    setSelected(key)
  }

  const setPage = (value) => {
    setMainComponent(value);
  }
  
  const menu = Menu(getMatchedItems(), selected);
  let mainComponent = <></>
  if(showMainComponent == "Home"){
    mainComponent = 
    <div>
      <br/><br/><br/><br/><br/><br/><br/>
      <HeaderGlitch name={"Browse all beats"} size={"subtitle"}/>
      
      <HorizontalMenu data={ Menu(getMatchedItems(), selected)}></HorizontalMenu>
      <ScrollMenu
        // hideArrows={false}
        alignCenter={alignCenter}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
        hideArrows={false}
        clickWhenDrag={false}
        dragging={true}
        data={menuItems2}
        selected={selected}
        onSelect={onSelect}
        // onUpdate={onSelect}
        transition={0.5}
        translate={0.5}
      />
      
      <ScrollMenu
        data={menu}
        arrowLeft={ArrowLeft2}
        arrowRight={ArrowRight2}
        selected={selected2}
        onSelect={onSelect2}
      /> 


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
        {/* <br/><br/>
      {
        jsonItems.map( item => {
          return <div key={item.title} >{item.title}</div>
        })
      } */}
      {/* <div id="DemoPlayer">
        <iframe width="360" height="240" src="https://www.youtube.com/embed/UQbknNrqxOw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> */}
      
      <p>artist colabarations produced & using anibal kitchen beats</p>
      <p>GEEZYS</p>
      <p>TYRIAN</p>
      <p>OTHERS</p>
    </div>
  }else if(showMainComponent=="Explore"){
    mainComponent = 
    <div>
      <ExploreGrid></ExploreGrid>
    </div>
  }

  return (
      <div className="App">
        <HamburgerMenu id="Menu"/>
          <div className="layer">
            <div className="layer2"></div>
            <div>
              <div id="div1" style={{margin: "auto",width: "100vw", position: "relative"}}>
                <div id="div2" style={{overflow: "auto", border: "1px solid red"}}>
                  <div id="div3" style={{height: "100vh", padding: "10vw"}}>
                  {/* <div id="progressBarContainer">
                  <div id="progressBar"></div>
                  </div> */}                  

                  {mainComponent}
                  <SearchBox updateSearchInput onChange={updateSearchInput} input={inputSearch}/>
                  <FooterTabs changePage={(value) => setPage(value)}></FooterTabs>
                  <p>©ANIBAL KITCHEN 2020. ALL RIGHTS RESERVED</p>
                  <br/><br/><br/><br/><br/><br/><br/>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
                    provident eveniet veritatis ipsa id consectetur ab tenetur dolores eaque.
                    Temporibus laboriosam cum corporis amet doloremque animi aut ipsa ea a?
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* 
        <FooterTabs changePage={(value) => setPage(value)}></FooterTabs>
        
        
        <br/>
        
        <div id="AppHeader">
          <div className="InlineTitle">
            <div id="CenterBox">
              <img id="ForkIcon" src={ForkIcon}></img>
              <HeaderGlitch name={"ANIBAL KITCHEN"} size={"title"}/>
            </div>
          </div>
        </div>
        
        
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

export default App;
