import React, { Component } from 'react'
// import Date from './Date'

export default class LoopingDateSelector extends Component {
    constructor(props){
        super(props)
        this.state={
            jumlahHari:1,
            allTreatmentDate:[],
            jadwal:''
        }
    }
    handleOnChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
      const {allTreatmentDate,jumlahHari,jadwal} = this.state
    return (
        <div>
            <label>Durasi Terapi</label>
            <br/>
            <input type="text" name="jumlahHari" value={jumlahHari} onChange={this.handleOnChange}/>
            <br/>
            {/* {
                jumlahHari.map(hari => console.log(hari))
            } */}
        </div>
    )
  }
}
