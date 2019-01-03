import history from '../history';
import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_email, ic_vpn_key } from 'react-icons-kit/md/';

import { connect } from 'react-redux';
import { userLoginAction } from '../actions/action.signIn';
import { bindActionCreators } from 'redux';

class FloatLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetPassword = this.resetPassword.bind(this)
    this.pushToRegistrasi = this.pushToRegistrasi.bind(this)
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

    this.props.userLoginAction(loginUser)
    console.log('Simpan hasil Form', loginUser)
  }

  resetPassword () {
    history.push('/contact')
    console.log('RESET PASSWORD function must run !!!')
  }
  pushToRegistrasi () {
    history.push('/register')
  }

  render() {
    return (
      <div> 
        <form onSubmit={this.onSubmit}>
        <div className="floatLogin">
          <ul>
            <li>
              <div className="iconFormLoginFloat">
                <Icon size="20" icon={ic_email} />
              </div>
              <input type="email" name="email" placeholder="Email" onChange={this.onChange} value={this.state.email}/> &nbsp;
            </li>
            <li>
              <div className="iconFormLoginFloat">
                <Icon size="20" icon={ic_vpn_key} />
              </div>
              <input type="password" name="password" placeholder="Password" onChange={this.onChange} value={this.state.password}/> &nbsp;
            </li>
            <input className="submitFormLoginFloat" type="submit" value="Masuk"/> &nbsp;
            <div className="clear"></div>
          </ul>
          {/* <div className="clear"></div> */}
          <p style={{ textAlign: 'center' }}>
              Lupa Password? 
              <b onClick={this.resetPassword}>Reset Password</b>
              &nbsp; &nbsp; | &nbsp; &nbsp;
              Belum punya akun?
              <b onClick={this.pushToRegistrasi}>Registrasi</b>
          </p>
          {/* <hr/>
          <p>
              Belum punya akun? &nbsp;&nbsp;
              <Link to="/register">
                  Registrasi
              </Link>
          </p> */}
        </div>
        </form>
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
    userLoginAction
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FloatLogin);