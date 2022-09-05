import React from 'react'
import './style.css';
import Popup from '../Popup/index'
import Player from '../Player/index'


const Index = ({ popup, closePopup, channelList, streamType, streamCodec, handleInputChange, loadSetting, inputInfo }) => {
  return (
    <>
      {
        popup && <Popup  {...{ closePopup, handleInputChange, loadSetting, inputInfo }} />
      }

      <div className='main-wrapper' >
        {channelList ?
          <div className='video-grid-wrapper'>
            {
              channelList.map((item, i) => <Player  {...{ item, streamType, streamCodec, inputInfo }} />)
            }
          </div>
          :
          <div className='message-wrapper' ><p className='message' > Nothing there to stream !!!,
            Please load setting   </p></div>
        }
      </div>
    </>
  )

}

export default Index