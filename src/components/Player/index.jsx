import React, { useEffect, useRef, } from 'react';
import shaka from 'shaka-player';
import './style.css';

const Index = ({ item, codec, type }) => {
  const videoPlayer = useRef();
  const {name , activeConfigGroup: {streams}  } = item
  const currentStream = streams.find((s) => s.streamSchema.levels[0].name === codec  && s.streamSchema.levels[1].name === type)
  useEffect(() => {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      console.log("Browser supported");
      const videoDOM = videoPlayer.current;
      var player = new shaka.Player(videoDOM);
      let config = {
        drm: {
          servers: {
            'com.widevine.alpha': 'https://drm-widevine-licensing.axprod.net/AcquireLicense?AxDrmMessage=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiZTE2ZmRkNzItOGFiNS00M2U0LWI5ZDktYWViNzAwOWY2M2I2IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsic3RhcnRfZGF0ZXRpbWUiOiIyMDIyLTA5LTAzVDA4OjE1OjU1Ljk1NVoiLCJleHBpcmF0aW9uX2RhdGV0aW1lIjoiMjAyMi0wOS0wNVQwODoxNTo1NS45NTVaIiwiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImxpY2Vuc2VfcmVxdWVzdCI6eyJzZWVkX2lkIjoiMTM0MTc1YTktY2NkNC00NWI3LWIzZmEtYWViNzAwOWY2M2I3IiwidXNhZ2VfcG9saWN5IjoiUG9saWN5IEEifX0sImNvbnRlbnRfa2V5X3VzYWdlX3BvbGljaWVzIjpbeyJuYW1lIjoiUG9saWN5IEEiLCJwbGF5cmVhZHkiOnsibWluX2RldmljZV9zZWN1cml0eV9sZXZlbCI6MTUwLCJwbGF5X2VuYWJsZXJzIjpbIjc4NjYyN0Q4LUMyQTYtNDRCRS04Rjg4LTA4QUUyNTVCMDFBNyJdfX1dfSwiYmVnaW5fZGF0ZSI6IjIwMjItMDktMDNUMDg6MTU6NTUuOTU1WiIsImV4cGlyYXRpb25fZGF0ZSI6IjIwMjItMDktMDVUMDg6MTU6NTUuOTU1WiJ9.pC0zlKk5cvSbgTQwLddFm39dXiaYfG4rkzgyTSzZgaM',
          }
        }
      }
      player.configure(config);

      if(currentStream && currentStream.url){
        player.load(currentStream.url).then(function () {
          console.log('The video has now been loaded!');
          videoDOM.play();
        }).catch(() => { });
      }
    } else {
      console.error('Browser not supported!');
    }
  }, [ item ]);


  return (
    <div className='video-wrapper'>
      <p className='channel-name-label'>{name}</p>
      <video
        ref={videoPlayer}
        controls
        autoPlay
        width="350px"
      />
    </div>
  )
}

export default Index