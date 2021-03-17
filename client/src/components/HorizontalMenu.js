import React from 'react';
import './HorizontalMenu.css';
import MenuItemBox from './MenuItemBox.js'

const HorizontalMenu = ({data}) =>{

  // <div className={`menu-item-box ${selected ? 'active' : ''}`}>
  //  <VideoClip videonum={text}></VideoClip>
  //   <div><a href={link}><img className="Purchase" src={Coin} /></a></div>
  // </div>
  // const generateItems = (list, selected) => {
  //   list.map(el => {
  //     const name = el.name;
  //     return <MenuItemBox text={name} key={name[1]} selected={selected} />
  //   });
  // }
  // const generateItems = (text, nameclass) =>{
  //   let items = []
  //   for(let i= 0; i <21; ++i){
  //     items.push(<div className={nameclass}><div className="itemContent">{text + i}</div></div>)
  //   }
  //   return items;
  // };
  console.log('data',data)
  return(
    <>
    <div className="horizontalMenu">
      {data}
    </div>

    {/* <div className="horizontalMenuflex">
        {generateItems('im the item #', "card")}
    </div> */}
    </>
  )

}

export default HorizontalMenu;