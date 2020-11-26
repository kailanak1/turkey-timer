import React, { useState, useEffect} from 'react';
import styled from 'styled-components'; 

const TurkeyTimer = (props) => {
    const [time, setTime] = useState(props)
    
    React.useEffect(() => {
        time > 0 && setTimeout(() => setTime(time -1), 1000);
    }, [time])

    let converttime = () => {
        console.log(props)
        let hours = Math.floor(time/3600)
        let minutes = Math.floor(time / 60)
        let seconds = time - minutes * 60
        if(seconds < 10){
             seconds = `0${seconds}`
        }
        return `${hours}:${minutes}:${seconds}`
    }

      return(
          <div>
              {time === 0 ? <h1>TurkeyTime</h1> : converttime()} 
          </div>
      )
}

export default TurkeyTimer