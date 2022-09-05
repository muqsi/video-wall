import React, { useEffect, useRef, useState, } from 'react';
import shaka from 'shaka-player';
import './style.css';

const Index = ({ item, streamType, streamCodec, inputInfo }) => {
  const videoPlayer = useRef();
  const [error, setError] = useState(null)
  const { name } = item

  useEffect(() => {
    const { name: n, activeConfigGroup: { streams } } = item
    const currentStream = streams.find((s) => s.streamSchema.levels[0].name === streamCodec && s.streamSchema.levels[1].name === streamType)
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      console.log("Browser supported");
      const videoDOM = videoPlayer.current;
      var player = new shaka.Player(videoDOM);
      let config = {
        drm: {
          servers: {
            'com.widevine.alpha': inputInfo.widevine || '' ,
            'com.apple.fps.1_0': inputInfo.fps || ''
          }
        }
      }

      player.configure(config);

      if (currentStream && currentStream.url) {
        player.load(currentStream.url).then(function () {
          setError(false)
          console.log(`Channel ${n} Loaded`);
          videoDOM.play();
        }).catch((e) => {
          console.log(`Error on Channel ${n} !!!`, e)
          setError(e)
          player.unload();
          player.destroy();
        });
      }
    } else {
      console.error('Browser not supported!');
    }
  }, [item, streamCodec, streamType, inputInfo]);



  const getErroMessage = (error) => {
    const { code } = error
    switch (code) {
      case 1001:
        return 'Stream not Availaable'
      case 4040:
        return 'Stream not Supported'
      default:
        return `Stream not working ( ${code} )`
    }
  }

  return (
    <div className='video-wrapper'>
      <p className='channel-name-label'>{name}</p>
      <div className='video-player' >

        {
          error &&
          <div className='error-wrapper'> <p className='button-label'> {getErroMessage(error)} </p> </div>
        }



        <video
          ref={videoPlayer}
          controls
          autoPlay
          width="350px"
        />
      </div>
    </div>
  )
}

export default Index