import React, { Component } from 'react'

export default class Date extends Component {
    constructor(props){
        super(props)
        this.state={
            date:''
        }
    }
    handleOnChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
  render() {
      const {date} = this.state
    return (
      <div>
        <label>Jadwal Terapi</label>
        <br/>
      </div>
    )
  }
}
