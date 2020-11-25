import React, {useState} from 'react';
import styled from 'styled-components'; 

const Title = styled.h1`
  padding: 8px; 
  margin: 8px
`

function TurkeyTimer (){

    const[timer, setTimer] = useState(0)

    React.useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer -1), 1000);
    }, [timer])

    let convertTimer = () => {
        let minutes = Math.floor(timer / 60)
        let seconds = timer - minutes * 60
        if(seconds < 10){
             seconds = `0${seconds}`
        }
       
        return `${minutes}:${seconds}`
    }

    return (
       
        <React.Fragment>
            <Title>
                {timer === 0 ? `Time's Up` : convertTimer()}
            </Title>
        </React.Fragment>
    )
}

export default TurkeyTimer