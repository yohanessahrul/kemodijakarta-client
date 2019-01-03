import React, { Component } from 'react';
import history from '../history';
import alertify from 'alertifyjs';
import { 
  Button,
 } from 'reactstrap';

 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import { cekAuthAction } from '../actions/action.user';

class Dashboard extends Component {
    constructor() {
      super()
      this.state = {
        email: '',
      }
      this.logout = this.logout.bind(this)
    }

    componentDidMount(){
      console.log('Cek 1')
      this.cekLogin()
    }

    cekLogin () {
      let token = localStorage.getItem('token');
      if (token) {
        this.props.cekAuthAction(token);
      } else {
        history.push('/login');
        console.log('Anda bukan admin, redirect ke login');
      }
    }

    logout () {
      alertify.confirm('Logout', 'Apakah anda ingin benr-benar keluar?', function(){
        localStorage.removeItem('token');
        setTimeout(function() {
          history.push('/')
        }, 2000)
        alertify.success('Anda berhasil keluar')
      }, function(){ alertify.error('Cancel')});
    }

    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                <p>Selamat datang dihalaman dashboard !!<b></b></p>
                <Button onClick={this.logout}>Logout</Button>
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
  cekAuthAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);