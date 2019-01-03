import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

import { connect } from 'react-redux';
// import { userLoginAction } from '../actions/action.signIn';
import { loginAction } from '../actions/action.user';
import { bindActionCreators } from 'redux';

class FormLogin extends Component {
  constructor(){
      super()
      this.state = {
      email: '',
      password: '',
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    let loginUser = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.loginAction(loginUser)

    console.log('Simpan hasil Form', loginUser)
  }
  render() {
    return (
      <div>
        <Form className="pad10" onSubmit={this.onSubmit}>
          <h3 style={{ textAlign: 'center', marginBottom: 20}}>Login</h3>
          <FormGroup>
            <Input type="email" name="email" placeholder="Email.." onChange={this.onChange} value={this.state.email} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" placeholder="Password.." onChange={this.onChange} value={this.state.password} />
          </FormGroup>
          <Button color="primary" block>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userLogin: state.signIn
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);