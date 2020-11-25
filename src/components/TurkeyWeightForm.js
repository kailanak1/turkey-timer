import React from 'react'
import turkeydata from './turkeydata'

class TurekyWeightForm extends React.Component{
  state = {
    weight: '', 
    stuffedStatus: '',
    time:''
  }

  displaySelect = () => {
    let turKeys = Object.keys(turkeydata.wholeTurkey)
    return turKeys.map((key, idx) => {
      return(
      <option
        value={key}
        key={idx}
      >{key}</option>)
    })
  }

  onValueChange = (e) =>{
    this.setState({
      stuffedStatus: e.target.value
    })
  }

  onSelectChange = (e) => {
    this.setState({
      weight: e.target.value
    })
  }

  displayRadio = () => {
    return(
    <div>
      Stuffed
      <input 
      type="radio"
      value="stuffed"
      checked={this.state.stuffedStatus === "stuffed"}
      onChange={this.onValueChange}
      />
      Unstuffed
      <input 
      type="radio"
      value="unstuffed"
      checked={this.state.stuffedStatus === "unstuffed"}
      onChange={this.onValueChange}
      />
    </div>
    )
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <label>Turkey Weight</label>
        <select value={this.state.weight} onChange={this.onSelectChange}>
          {this.displaySelect()}
        </select>
        {this.displayRadio()}
      </div>
    )
  }
}

export default TurekyWeightForm