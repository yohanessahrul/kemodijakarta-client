import React, { Component } from 'react';

class Form extends Component {
    constructor() {
      super()
      this.state = {
        showFormDiv: false
      }
    }
    render() {
        return (
            <div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqTqjUoHUnTQnUufQubXFNObPzFYMHQKv7Z7V8MsVdWgQvaQ/viewform?embedded=true" width="100%" height="700px" title="form" >Loading...</iframe>
            </div>
        );
    }
}

export default Form;