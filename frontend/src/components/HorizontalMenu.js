import React from 'react';
import './HorizontalMenu.css';

const HorizontalMenu = ({data}) =>{

  const showMenuItems = (objList) =>{
    let items = []
    for(let i= 0; i <objList.length; ++i){
      items.push(
        <div key={objList[i].title} className="card">
          <div className="itemContent">
            <a href={objList[i].beatstartlink}>{objList[i].title}</a>
            <div className="video-wrapper">
              <div id={"player" + i}></div>
            </div>
          </div>
        </div>
      )
    }
    return items;
  };

  return(
    <>
    <div className="horizontalMenuflex">
      {showMenuItems(data)}
    </div>
    </>
  )

}

export default HorizontalMenu;