import React, { useState} from 'react';


const TurkeyTimer = (props) => {
    let convertProps = parseInt(props)
    const [time, setTime] = useState(props.props)
    const [isActive, setIsActive] = useState(false)

    function toggle(){
        setIsActive(!isActive)
    } 
    React.useEffect(() => {
        let interval = null
        if (isActive){
            interval = setInterval(() => {
                setTime(time => time - 1);
              }, 1000);
            } else if (!isActive && time !== 0) {
              clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, [isActive, time]);
       

    let converttime = () => {
 
        let hours = Math.floor(time/3600)
        let minutes = Math.floor(time / 60) % 60
    
        let seconds = time % 60
    
        return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
    }

      return(
          <div>
              {time === 0 ? <h1>TurkeyTime</h1> : converttime()} 
              <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
           
          </div>
      )
}

export default TurkeyTimer