import React from 'react';
import './SwiperContainer.css'
import MenuItemBox from './MenuItemBox.js'

const SwiperContainer = (list, selected) => {
  list.map(el => {
    const {name} = el;
    return <MenuItemBox text={name} key={name} selected={selected} />
  });
}
export default SwiperContainer;