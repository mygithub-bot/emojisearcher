import React, { Component } from 'react'
class FunctionClick extends Component {
    constructor(){
        super()
        // this.state={
        //     message:"hello abhi"
        // }
    }
    handleclick(){
        console.log("this is class component button");
    }
  render() {
    
    return (
      <div>
        <h1>{this.state.message}</h1><button onClick={this.handleclick}>ClickButton</button></div>
    )
  }
}

export default FunctionClick