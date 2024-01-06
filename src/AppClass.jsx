import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  

  // code here
  render(){

    this.data = this.props.props

    let styleMydiv = {
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
      margin:"30px"
    }
    
    return(
      <>
      <h1 style={{textAlign:"center"}}>Kalvium Gallery</h1>

      <div style={styleMydiv}>
        <img src={this.data[0].img} alt="" width={"600px"} />
        <img src={this.data[1].img} alt="" width={"600px"} />
        <img src={this.data[2].img} alt="" width={"600px"} />
        <img src={this.data[3].img} alt="" width={"600px"} />
      </div>
      
      </>
    )
  }
}
