import React, { useState, useEffect} from 'react';
import styled from 'styled-components'; 

const Button = styled.button`
    background-color: #C1311C; 
    color: white;
`
const TurkeyTimer = () => {
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false);


    function toggle(){
        setIsActive(!isActive)
    }

    function reset(){
        setTime(0);
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setTime(time => time + 1);
          }, 1000);
        } else if (!isActive && time !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, time]);

      const convertCounter = () => {
        let minutes = Math.floor(time / 60)
        let hours = Math.floor(minutes/60)
        let seconds = time - minutes * 60
        if(seconds < 10){
             seconds = `0${seconds}`
        }
        if(minutes < 60){
            minutes = `0${minutes}`
        }
        if(hours < 60){
            hours = `0${hours}`
        }
        return `${hours}:${minutes}:${seconds}`
    }

      return(
          <div>
              Timer
              {convertCounter()}
            <Button onClick={toggle}>{isActive ? `Pause` : `Start`}</Button> 
          </div>
      )

}

export default TurkeyTimer