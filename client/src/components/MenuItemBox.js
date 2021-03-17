import React from 'react';
import './MenuItemBox.css'
import VideoClip from "./VideoClip.js"
import Coin from "../assets/coin.png"

const MenuItemBox = ({text, link, selected}) => { 
    console.log("itembox ",text)
    return(
        <div className={`menu-item-box ${selected ? 'active' : ''}`}>
            <VideoClip videonum={text}></VideoClip>
            <div><a href={link}><img className="Purchase" src={Coin} /></a></div>
        </div>
    )
}
export default MenuItemBox;