import React from 'react'
import turkeydata from './turkeydata'
import TurkeyTimer from './TurkeyTimer'

class TurekyWeightForm extends React.Component{
  state = {
    weight: "8 to 12 pounds", 
    stuffedStatus: "stuffed",
    time: "", 
    convertTime: 11700
  }

  componentDidMount(){
    this.setTime()

  }

  displaySelect = () => {
    return(<select value={this.state.weight} onChange={this.onSelectChange}>
         <option value="8 to 12 pounds">8 to 12 pounds</option>
         <option value="12 to 14 pounds">12 to 14 pounds</option>
         <option value="14 to 18 pounds">14 to 18 pounds</option>
         <option value="18 to 20 pounds">18 to 20 pounds</option>
         <option value="20 to 24 pounds">20 to 24 pounds</option>
        </select>
    )
  }

  onValueChange = (e) =>{
    this.setState({
      stuffedStatus: e.target.value
    }, () => this.setTime())
   
  }

  onSelectChange = (e) => {
    this.setState({
      weight: e.target.value
    }, () => this.setTime())
    
    
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

  setTime = () => {
    let weight = this.state.weight
    let stuffedStatus = this.state.stuffedStatus
    let values = Object.values(turkeydata)
    let time = values[0][weight][stuffedStatus]
    this.setState({
      time: time
    })
    this.convertTimeToSeconds()
  }

  convertTimeToSeconds = () => {
    let time = this.state.time 
    let hours = parseInt(time[0])
    let minutes = parseInt(time.slice(2,4))
     let seconds = Math.floor(hours * 60 * 60) + Math.floor(minutes * 60)
      this.setState({
        convertTime: seconds
      })
    

  }



  render(){
    return(
      <div>
   
        <label>Turkey Weight</label>
        {this.displaySelect()}
        {this.displayRadio()}
       <TurkeyTimer props={this.state.convertTime}/>
      
      </div>
    )
  }
}

export default TurekyWeightForm