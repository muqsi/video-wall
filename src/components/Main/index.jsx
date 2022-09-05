import React from 'react'
import './style.css';
import Popup from '../Popup/index'
import Player from '../Player/index'


const Index = ({ popup, closePopup, channelList, streamType, streamCodec, handleInputChange, loadSetting, inputInfo }) => {
  return (
    <>
    {
      popup && <Popup  {...{closePopup, handleInputChange, loadSetting, inputInfo}} />
    }
    
        <div className='main-wrapper' >
      <div className='video-grid-wrapper'>
        {
          channelList ?  channelList.map((item, i) => <Player  {...{item,streamType,streamCodec,inputInfo }}  />) : <>No contetns</>
        }
      </div>
    </div>
    </>
  )

}

export default Index