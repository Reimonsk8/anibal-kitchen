import React from 'react';
import './MenuItemBox.css'
import VideoClip from "./VideoClip.js"

const MenuItemBox = ({text, selected}) => { 
    return(
        <div className={`menu-item-box ${selected ? 'active' : ''}`}>
            <div><a href="https://soundcloud.com/anibalsalcedo">{text[0]}</a></div>
            <VideoClip videonum={text[1]}></VideoClip>
        </div>
    )
}
export default MenuItemBox;