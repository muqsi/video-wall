import React from 'react'
import './style.css';

const index = () => {
  return (
    <>
      <div className='full-width-wrapper' ></div>
      <div className='popup-wrapper'>
        <p className='title'>Load Settings</p>

        <div className='input-group' >
          <p className='button-label' >API URL</p>
          <input />
        </div>
        <div className='input-group' >
          <p className='button-label'>API KEY</p>
          <input />
        </div>
        <div className='input-group' >
          <p className='button-label'>License</p>
          <input />
        </div>

        <button className='primary-button submit'>Load Settings</button>

      </div>
    </>
  )
}

export default index