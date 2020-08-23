import React from 'react';
import './MenuItemBox.css'

const MenuItemBox  = ({text, selected}) => {
    return(
        <div className={`menu-item-box ${selected ? 'active' : ''}`}>
            {text}
        </div>
    )
}
export default MenuItemBox;