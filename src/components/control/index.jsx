import React from 'react'
import './style.css';

const index = ({ openPopup }) => {
  return (
    <div className='control-wrapper' >

      <div className='button-group-wrapper'>
        <div className='button-group'>
        <p className='button-label'> Select Encoding Formats </p>
           <div>
          <button className='small-button-active' >Dash</button>
          <button className='small-button'>HLS</button>
          </div>
        </div>

        <div className='button-group'>
        <p className='button-label'> Select Stream Type </p>
        <div>
          <button className='small-button-active'>Primary</button>
          <button className='small-button'>Secondary</button>
          </div>
        </div>
      </div>

      <button className='primary-button' onClick={openPopup}  >Load Settings</button>
    </div>
  )
}

export default index