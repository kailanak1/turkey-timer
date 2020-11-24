import React, {useState} from 'react'
import styled from 'styled-components'


const Select = styled.select`
  color: white;
  position: absolute;
  background-color: #C1311C;
  padding: 8px; 
  margin: 8px; 
  font-size: 14px;
  border:none;
  width: 100%;
`


const Option = styled.option`
  color: white;
  background-color: #C1311C;
  font-weight: small;
  padding: 8px;
  margin: 8px;
`

const Label = styled.label`
  padding: 8px; 
  margin: 8px;
  text-align: center;
`





const TurkeyWeightForm = () => {

    const [items] = useState([
      {label: "8 to 12 pounds", value:"8 to 12 pounds" }, 
      {label: "12 to 14 pounds", value:"12 to 14 pounds" },
      {label: "14 to 18 pounds", value:"14 to 18 pounds" },
      {label: "18 to 20 pounds", value:"18 to 20 pounds" }, 
      {label: "20 to 24 pounds", value:"20 to 24 pounds" }
    ])

   

    return(
      <div>
        <Label>Turkey Size</Label>
        <br/>
        <Select>
      {items.map(item => (
        <Option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </Option>
      ))}
    </Select>
         
      </div>
    )
} 

export default TurkeyWeightForm