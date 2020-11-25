import React, {useState} from 'react'
import styled from 'styled-components'


const Select = styled.select`
  color: white;
  position: relative;
  background-color: #C1311C;
  padding: 8px; 
  margin: 8px; 
  font-size: 14px;
  border:none;

  &:hover {
        cursor: pointer;
        background-color: #DB9388;
      } 
  
`


const Option = styled.option`
  color: white;
  background-color: #C1311C;
  font-weight: small;
  padding: 8px;
  margin: 8px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #C1311C;
  } 
`

const Form = styled.form`
  padding: 8px;
`



const Label = styled.label`
  padding: 8px; 
  margin: 8px
`

const RadioMark = styled.span`
  display: inline-block;
    position: relative;
    border: 1px solid #777777;
    width: 14px;
    height: 14px;
    left: 0;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
    padding: 8px; 
    margin: 8px;
`

const RadioInput = styled.input`
  position: relative;
  visibility: hidden;
  display: none;
  padding: 8px; 
  margin: 8px; 
  &:checked + ${RadioMark} {
      &::after {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: blue;
          left: 2px;
          top: 15%;
          position: absolute;
      }
  }
`

const TurkeyWeightForm = () => {

    const [items] = useState([
      {label: "8 to 12 pounds", value:"8 to 12 pounds" }, 
      {label: "12 to 14 pounds", value:"12 to 14 pounds" },
      {label: "14 to 18 pounds", value:"14 to 18 pounds" },
      {label: "18 to 20 pounds", value:"18 to 20 pounds" }, 
      {label: "20 to 24 pounds", value:"20 to 24 pounds" }
    ])

    const [stuffstatus, setStuffed] = useState('stuffed')
   
    const renderSelect = () =>{
      return(<Select>
      {items.map(item => (
        <Option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </Option>
      ))}
     
     </Select>)
    }

    return(
      <Form>
        <Label>Turkey Size</Label>
        <br/>
        
      {renderSelect()}
      <br/>
     <Label>Stuffed or unstuffed?</Label>
     <br/>
     stuffed
     <RadioMark input='radio'></RadioMark>
     unstuffed
     <RadioMark></RadioMark>
      </Form>
    )
} 

export default TurkeyWeightForm