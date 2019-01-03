import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserByIdAction, updateUserAction } from '../../actions/action.user';

class FormEditUser extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      id: null,
      username: null,
      email: null,
      role: null
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
    let { id, role } = this.state;
    this.props.updateUserAction(id, role, localStorage.getItem('token'));
  }

  componentDidMount () {
    let id = window.location.pathname.split('/')[4];
    this.props.getUserByIdAction(id, localStorage.getItem('token'));
  }

  componentWillReceiveProps (nextProps) {
    let { _id, username, email, role } = nextProps.state.reducerUser.readUser;
    this.setState({
      isLoading: true,
      id: _id,
      username: username,
      email: email,
      role: role
    })
  }

  render() {
    let { isLoading, username, email, role } = this.state;
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Tambah User</h1>
        <Form onSubmit={this.onSubmitForm}>
          <FormGroup>
            <Label>Username</Label>
            <Input text="text" name="username" onChange={this.onChangeForm} value={(isLoading) ? username: 'Loading..'} disabled/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input text="text" name="email" onChange={this.onChangeForm} value={(isLoading) ? email: 'Loading..'} disabled/>
          </FormGroup>
          <FormGroup>
            <Label>Role</Label>
            <Input type="select" name="role" onChange={this.onChangeForm} value={(isLoading) ? role: 'Loading..'}>
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </Input>
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
  getUserByIdAction, updateUserAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormEditUser);