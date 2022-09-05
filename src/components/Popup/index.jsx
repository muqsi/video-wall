import React from 'react'
import './style.css';

const index = ({closePopup, handleInputChange, loadSetting, inputInfo}) => {
  return (
    <>
      <div className='full-width-wrapper' onClick={closePopup} ></div>
      <div className='popup-wrapper'>
        <p className='title'>Load Settings</p>

        <div className='input-group' >
          <p className='button-label' >API URL</p>
          <input type='text' name='apiUrl' value={inputInfo.apiUrl} onChange={handleInputChange} />
        </div>
        <div className='input-group' >
          <p className='button-label'>API KEY</p>
          <input type='text' name='apiKey' value={inputInfo.apiKey} onChange={handleInputChange} />
        </div>
        <div className='input-group' >
          <p className='button-label'>Widevine License</p>
          <input type='text' value={ inputInfo.widevine } name="widevine" onChange={handleInputChange} />
        </div>
        <div className='input-group' >
          <p className='button-label'>Fairplay License</p>
          <input type='text' value={ inputInfo.fairplay } name="fps" onChange={handleInputChange} />
        </div>

        <button className='primary-button submit' onClick={loadSetting} >Load Settings</button>

      </div>
    </>
  )
}

export default index