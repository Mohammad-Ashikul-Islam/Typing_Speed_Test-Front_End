import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Timer = ({flag,setflag}) => {

  return(
    <CountdownCircleTimer
      isPlaying
      duration={60}
      rotation = {'counterclockwise'}
      trailColor = '#ad2d31'
      size={100}
      colors={['#00ff00', '#4b0082', '#ffff00', '#ff0000']}
      colorsTime={[60, 40, 20, 0]}
      onComplete = { () => setflag(true)}
      //onComplete = { ()=>{ window.location.assign("./ShowResult.js") }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )
}
export default Timer;