import './App.css';
import Header from './components/Header/index'
import Control from './components/control/index'
import Main from './components/Main/index'
import { useState } from 'react';
import axios from 'axios'
import { gqlQuery, gqlVars } from './const/graphql';

const App = () => {

  const onSubmit = () => {
    const payload = {
      query: gqlQuery,
      variables: gqlVars,
    }
    const apiUrl = "https://5p3ymjhozjenhhkbznuu4pcvyq.appsync-api.us-east-1.amazonaws.com/graphql"
    const apiKey = "da2-euxyvbissje7da3w4zb23ccply"
     const byteLength = (str) => {
      if (!str || typeof str != 'string') {
        throw new Error('Cannot get byte length of anything other than a string.')
      }
      const m = encodeURIComponent(str).match(/%[89ABab]/g);
      return str.length + (m ? m.length : 0);
    } 
    const body = JSON.stringify(payload)
    const headers = {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'Content-Length': byteLength(body).toString()
    }
    axios.post(apiUrl, body, {
      headers: headers,
    }).then(()=>{})
  }


  //Popup
  const [popup, setPopup] = useState(false)
  const openPopup = () => {
    console.log("first");
    setPopup(true);
    onSubmit()
  }
  const closePopup = () => { setPopup(false) }

  return (
    <>
      <Header />
      <div className='app-wrapper' >
        <Control  {...{ openPopup }} />
        <Main {...{ popup, closePopup }} />
      </div>
    </>
  );
}

export default App;
