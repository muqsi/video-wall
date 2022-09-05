import React from 'react'
import './style.css';

const index = ({ openPopup , setStreamType, setStreamCodec,  streamType, streamCodec,   }) => {
  return (
    <div className='control-wrapper' >

      <div className='button-group-wrapper'>
        <div className='button-group'>
        <p className='button-label'> Select Encoding Formats </p>
           <div>
          <button   className={ (streamCodec === 'DASH') ? 'small-button-active' : 'small-button'}    onClick={() => setStreamCodec('DASH') } >Dash</button>
          <button className={ (streamCodec === 'HLS') ? 'small-button-active' : 'small-button'}  onClick={() => setStreamCodec('HLS') } >HLS</button>
          </div>
        </div>

        <div className='button-group'>
        <p className='button-label'> Select Stream Type </p>
        <div>
          <button className={ (streamType === 'Primary') ? 'small-button-active' : 'small-button'} onClick={() => setStreamType('Primary') } >Primary</button>
          <button className={ (streamType === 'Secondary') ? 'small-button-active' : 'small-button'} onClick={() => setStreamType('Secondary')} >Secondary</button>
          </div>
        </div>
      </div>

      <button className='primary-button' onClick={openPopup}  >Load Settings</button>
    </div>
  )
}

export default index