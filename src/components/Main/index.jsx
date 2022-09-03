import React from 'react'
import './style.css';
import Popup from '../Popup/index'
import videoOne from '../../assets/three.mp4'
import videoTwo from '../../assets/two.mp4'

const index = () => {

  const playbacks = [
    { channel: "C-Sport Extra 2", url: '' },
    { channel: "C-Sport Extra", url: '' },
    { channel: "C-Sport-3", url: '' },
    { channel: "C-Sport-4", url: '' },
    { channel: "C-Sport-1", url: '' },
    { channel: "C-Sport-2", url: '' },
  ]


  const VideoPlayer = ({ item, i }) => {
    return (
      <div className='video-wrapper'>
        <p className='channel-name-label'>{item.channel}</p> 
        <video width="350px" id="video" controls autoPlay>
          <source src={i % 2 === 0 ? videoOne : videoTwo  } type="video/mp4" />
        </video>
      </div>
    )
  }



  return (
    <>
    <Popup />
        <div className='main-wrapper' >
      <div className='video-grid-wrapper'>
        {
          playbacks.map((item, i) => <VideoPlayer item={item} i={i}/>)
        }
      </div>
    </div>
    </>
  )

}

export default index