import './App.css';
import Header from './components/Header/index'
import Control from './components/control/index'
import Main from './components/Main/index'
import { useState } from 'react';
import axios from 'axios'
import { gqlQuery, gqlVars } from './const/graphql';

const App = () => {

  //Popup
  const [popup, setPopup] = useState(false);
  const [channelList, setChannelList] = useState(null);
  const [ streamType, setStreamType ] = useState("Primary");
  const [ streamCodec, setStreamCodec ] = useState("DASH");
  const [ inputInfo, setInputInfo ] = useState({apiUrl:null , apiKey: null, widevine:null, fps:null })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputInfo({...inputInfo, [name]: value})
  };

  const openPopup = () => {
    setPopup(true);
    // onSubmit()
  }
  const closePopup = () => { setPopup(false) }

  const loadSetting = () => {
   

    if(inputInfo.apiUrl && inputInfo.apiKey )
    {
    const payload = {
      query: gqlQuery,
      variables: gqlVars,
    }
 
    const byteLength = (str) => {
      if (!str || typeof str != 'string') {
        throw new Error('Cannot get byte length of anything other than a string.')
      }
      const m = encodeURIComponent(str).match(/%[89ABab]/g);
      return str.length + (m ? m.length : 0);
    }
    const body = JSON.stringify(payload)
    const headers = {
      'x-api-key': inputInfo.apiKey,
      'Content-Type': 'application/json',
      'Content-Length': byteLength(body).toString()
    }
    axios.post(inputInfo.apiUrl, body, {
      headers: headers,
    }).then((res) => {
      const { data: resData } = res
      const { data } = resData
      const { listChannels } = data
      console.log("channel data SUCCESS !!!!", listChannels.items)
      setChannelList(listChannels.items)
    }).catch((err) => {
      console.log("channel data API CALL failer !!!!", err)
    })

  } else {
    console.log("API INFO MISSING !!!!!")
  }
  closePopup()
  }


  return (
    <>
      <Header />
      <div className='app-wrapper' >
        <Control  {...{ openPopup , setStreamType, setStreamCodec,  streamType, streamCodec,   }} />
        <Main {...{ popup, closePopup, channelList , streamType, streamCodec, handleInputChange, loadSetting ,inputInfo}} />
      </div>
    </>
  );
}

export default App;
