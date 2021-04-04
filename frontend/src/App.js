import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import HorizontalMenu from './components/HorizontalMenu'
import SearchBox from './components/SearchBox'
import FooterTabs from './components/FooterTabs'
import HamburgerMenu from './components/HamburgerMenu'
import ForkIcon from './fork-icon.svg'

function App() {
  
  const [inputSearch, setInputSearch] = useState('');
  const [jsonItems, setJsonItems] = useState([]);

  useEffect(() => {
    
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const getJsonItems = async () =>{
    await axios.get('myBeatList.json').then(response =>{
      setJsonItems(response.data.data)
    }).catch((err)=> {
      console.log(err.response.data)
    });
  }

  getJsonItems();

  },[]);

  useEffect(() => {
    
    let playersLen = jsonItems.length;
    let players = new Array();
    function onYouTubeIframeAPIReady() {
      if (typeof jsonItems === 'undefined') return;
      
      for (var i = 0; i < playersLen; i++) {
          var curplayer = createPlayer(jsonItems[i]);
          players[i] = curplayer;
      }
      function createPlayer(playerInfo) {
        return new window.YT.Player(playerInfo.id, {
            height: playerInfo.height,
            width: playerInfo.width,
            videoId: playerInfo.videoId,
        });
       }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data ===  window.YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        let player;
        player.stopVideo();
      }
    }
  
    if(playersLen > 0){
      setTimeout(() => {
        onYouTubeIframeAPIReady();
      }, 1000);
    }
  }, [jsonItems])


  const updateSearchInput = (inputSearch = "") =>{
    setInputSearch(inputSearch)
  }
  const getSearchFilterData = () => jsonItems.filter((item) => item.title.toLowerCase().includes(inputSearch.toLowerCase()))
  const getMatchedItems = () => getSearchFilterData()
  
  return (
    <div className="App">
      <HamburgerMenu/>
      <SearchBox updateSearchInput onChange={updateSearchInput} input={inputSearch}/>
      <div id="AppHeader">
        <div className="InlineTitle">
          <div id="CenterBox">
            <img id="ForkIcon" src={ForkIcon}></img>
            <h1 name={"ANIBAL KITCHEN"} size={"title"}/>
          </div>
        </div>
      </div>
      <HorizontalMenu data={getMatchedItems()}/>
      <FooterTabs></FooterTabs>
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
  );
}

export default App;
