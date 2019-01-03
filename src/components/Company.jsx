import React, { Component } from 'react';

class Company extends Component {
  render() {
    console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <h3 style={{color: 'red'}}>Company</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit itaque qui perspiciatis vitae temporibus, harum, voluptates quo commodi magnam assumenda impedit sed similique ab ratione omnis odit deserunt minus obcaecati?</p>
      </div>
    );
  }
}

export default Company;