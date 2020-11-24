import React, {useState} from 'react';


function TurkeyTimer (){

    const[timer, setTimer] = useState(0)

    React.useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer -1), 1000);
    }, [timer])

    let convertTimer = () => {
        let minutes = Math.floor(timer / 60)
        let seconds = counter - minutes * 60
        if(seconds < 10){
             seconds = `0${seconds}`
        }
        return `${minutes}:${seconds}`
    }

    return (
        <React.Fragment>
       
                {timer === 0 ? `Time's Up` : convertTimer()}
          
        </React.Fragment>
    )
}

export default TurkeyTimer