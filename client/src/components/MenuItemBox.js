import React from 'react';
import './MenuItemBox.css'
import VideoClip from "./VideoClip.js"
import Coin from "../assets/coin.png"

const MenuItemBox = ({text, selected}) => { 
    return(
        <div className={`menu-item-box ${selected ? 'active' : ''}`}>
            <VideoClip videonum={text[1]}></VideoClip>
            <div><a href={text[0]}><img className="Purchase" src={Coin} /></a></div>
        </div>
    )
}
export default MenuItemBox;