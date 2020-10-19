import React from 'react'
import './VideoClip.css'
class VideoClip extends React.Component{

  componentDidMount(){
      

    }

  render(){
  let videonum = this.props.videonum;



  // let video;
  // if(videonum == 1){
  //   video = <iframe width="1046" height="599" src="https://www.youtube.com/embed/O3fI53P3SYQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
  // }else if(videonum == 2){
  //   video = <iframe width="1046" height="599"  src="https://www.youtube.com/embed/E059wQoEtnA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true"></iframe>
  // }else if(videonum == 3){
  //   video = <iframe width="1046" height="599" src="https://www.youtube.com/embed/o4QhE4hUbd0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  // }else if(videonum == 4){
  //   video = <iframe width="1046" height="599" src="https://www.youtube.com/embed/EphebptH_no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  // }else if(videonum == 5){
  //   video = <iframe width="1046" height="599" src="https://www.youtube.com/embed/eVzpK-kgMc4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  // }

  
  return(
    <div className="video-wrapper">
      <p>{videonum}</p>
      <div id={"player"+videonum}></div>
    </div>
  )
  }
}

export default VideoClip;