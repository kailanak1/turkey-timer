import React from 'react';

import TurkeyWeightForm from './components/TurkeyWeightForm';
import TurkeyTimer from './components/TurkeyTimer';

import styled from 'styled-components'

const Title = styled.h1`
  padding: 8px; 
  margin: 8px; 
`

function App() {
  return(
    <div >
      <Title>Cook that Turkey</Title>
      <TurkeyWeightForm/>
  
    </div>
  );
}

export default App;
