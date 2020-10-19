import React from 'react';
import './SwiperContainer.css'
import MenuItemBox from './MenuItemBox.js'

const SwiperContainer = (list, selected) => {
  list.map(el => {
    const name = el.name;
    return <MenuItemBox text={name} key={name[1]} selected={selected} />
  });
}
export default SwiperContainer;