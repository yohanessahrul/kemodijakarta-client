import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

import { connect } from 'react-redux';
import { userFormAction } from '../actions/action.signUp';
import { bindActionCreators } from 'redux';

class FormRegister extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      username: '',
      password1: '',
      password2: ''
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

    let regisUser = {
      email: this.state.email,
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2
    }

    this.props.userFormAction(regisUser)

    console.log('Simpan hasil Form', regisUser)
  }

  render() {
    return (
      <div>  
        <Form className="pad10" onSubmit={this.onSubmit}>
          <h3 style={{ textAlign: 'center', marginBottom: 20}}>Registrasi By Alang</h3>
          {/* <p style={{ fontSize: 14, marginTop: -5, lineHeight: 1.3, color: 'gray'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p> */}
          <FormGroup>
            <Input type="text" name="username" placeholder="Username.."  onChange={this.onChange} value={this.state.username} />
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" placeholder="Email.."  onChange={this.onChange} value={this.state.email} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password1" placeholder="Password.."  onChange={this.onChange} value={this.state.password1} />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password2" placeholder="Retype-Password.."  onChange={this.onChange} value={this.state.password2} />
          </FormGroup>
          <Button color="primary" block>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userForm: state.signUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userFormAction,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);