import React from 'react'
import './style.css';
import Popup from '../Popup/index'
import Player from '../Player/index'


const Index = ({ popup, closePopup, channelList }) => {
  return (
    <>
    {
      popup && <Popup  {...{closePopup}} />
    }
    
        <div className='main-wrapper' >
      <div className='video-grid-wrapper'>
        {
          channelList ?  channelList.map((item, i) => <Player item={item} i={i} key={i}  type="Primary" codec="DASH" />) : <>no contetns</>
        }
      </div>
    </div>
    </>
  )

}

export default Index