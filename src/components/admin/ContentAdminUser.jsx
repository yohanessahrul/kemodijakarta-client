import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import alertify from 'alertifyjs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUserAction, deleteUserAction } from '../../actions/action.user';

class ContentAdminUser extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      allUsers: null,
    }
    this.deleteUserById = this.deleteUserById.bind(this);
  }
  componentDidMount () {
    this.props.getAllUserAction();
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      allUsers: nextProps.state.reducerUser.allUsers,
    })
  }
  deleteUserById (id) {
    let { deleteUserAction } = this.props
    alertify.confirm('Yakin hapus?', 'Jika anda menghapus user ini, anda tidak dapat mengembalikannya kembali',
      function () {
        deleteUserAction(id, localStorage.getItem('token'));
        alertify.success(`Anda berhasil menghapus user dengan id ${id}`)
      },
      function () {
        alertify.error('Canceling delete')
      }
    )
  }
  render() {
    const listUsers = () => {
      if (this.state.isLoading) {
        const loopUsers = this.state.allUsers.map((data, i) => {
          return (
            <tr key={data._id}>
              <td>{i++ + 1}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{ (data.role === 'admin') ? <span className="roleAdminStyle">{data.role}</span>: data.role }</td>
              <td>***********</td>
              <td>
                <Link to={`/admin/user/edit/${data._id}`}>
                  <Button color="warning" size="sm">Edit Role</Button>
                </Link> &nbsp;
                <Link to={`#`} onClick={() => this.deleteUserById(data._id)}>
                  <Button color="danger" size="sm">Delete</Button>
                </Link>
              </td>
            </tr>
          )
        })
        return loopUsers;
      }
    }
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Content Admin User</h1>
        <div style={{ display: 'table', width: '100%', height: '30px', margin: '50px!important', marginBottom: '20px' }}>
          <Link to="/admin/user/tambah">
            <Button color="primary">Tambah</Button>
          </Link>
        </div>
        {
          (!this.state.isLoading) ?
            'Loading...' :
            <Table>
              <thead>
                <tr>
                  <td>~</td>
                  <td>Username</td>
                  <td>Email</td>
                  <td>Role</td>
                  <td>Password</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {listUsers()}
              </tbody>
            </Table>
        }
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
  getAllUserAction, deleteUserAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContentAdminUser);