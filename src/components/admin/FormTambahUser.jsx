import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewUser } from '../../actions/action.user';

class FormTambahUser extends Component {
  constructor (props) {
    super (props)
    this.state = {
      username: null,
      email: null,
      password: null,
    }
    this.onChangeForm = this.onChangeForm.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeForm (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitForm (e) {
    e.preventDefault();
    this.props.addNewUser(this.state.username, this.state.email, this.state.password, localStorage.getItem('token'))
  }

  render() {
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Tambah User</h1>
        <Form onSubmit={this.onSubmitForm}>
          <FormGroup>
            <Label>Username</Label>
            <Input text="text" name="username" onChange={this.onChangeForm}/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input text="text" name="email" onChange={this.onChangeForm}/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input text="password" name="password" onChange={this.onChangeForm}/>
          </FormGroup>
          <Button color="primary">Simpan</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addNewUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormTambahUser);