import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import FloatLogin from '../components/FloatLogin';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { moveUrl } from '../actions/action.url';

import history from '../history'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen : false,
      currentUrlNavigation: window.location.href,
      showHeader: false,
      showLogin: false,
    }
    this.showDaftarContainer = this.showDaftarContainer.bind(this);
    this.toEnglish = this.toEnglish.bind(this);
    this.toIndonesia = this.toIndonesia.bind(this);
  }

  toogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.setState({
      currentUrlNavigation: window.location.href
    })
  }

  showDaftarContainer () {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  Daftar(){
    history.push('/register')
  }

  toIndonesia () {
    localStorage.setItem('lang', 'id')
    window.location.reload()
  }

  toEnglish () {
    localStorage.setItem('lang', 'en')
    window.location.reload()
  }
  
  render() {
    const { daftar, beranda, tentang, kalkulator, kontak } = this.props.lang
    const colorLangID = () => {
      if (localStorage.getItem('lang') === null || localStorage.getItem('lang') === 'id') {
        let obj1 = { float: 'left', listStyle: 'none', fontSize: '14px' }
        return obj1;
      } else {
        let obj2 = { float: 'left', listStyle: 'none', fontSize: '14px', color: '#89a4b2' }
        return obj2;
      }
    }
    const colorLangEN = () => {
      if (localStorage.getItem('lang') === 'en') {
        let obj1 = { listStyle: 'none', fontSize: '14px' }
        return obj1;
      } else {
        let obj2 = { listStyle: 'none', fontSize: '14px', color: '#89a4b2' }
        return obj2;
      }
    }

    return (
      <div>
        <div className="subHeaderTop">
          <ul>
            <li style={colorLangID()} onClick={this.toIndonesia}>
              ID
            </li>
            <li style={colorLangEN()} onClick={this.toEnglish}>
              EN
            </li>
          </ul>
        </div>
        <Navbar color="white" light expand="md">
          <Container>
            <NavbarBrand>
              <div className="logoWrap">
                <img className="logo" src={'/images/logo-kemo.png'} alt="logo"/>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toogle}></NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="daftarButton">
                  <div style={{ background: 'red' }}>
                    <Button style={{marginTop: -10, marginBottom: -10, position: 'relative'}} onClick={this.Daftar}>
                      {daftar}
                    </Button>
                    {
                      (this.state.showLogin) ? <FloatLogin/> : ''
                    }
                  </div>
                </NavItem>
                <NavItem>
                  <Link to="/">{beranda}</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">{tentang}</Link>
                </NavItem>
                <NavItem>
                  <Link to="/artikel">ARTIKEL</Link>
                </NavItem>
                <NavItem>
                  <Link to="/kalkulator" target="_blank">
                    {kalkulator}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">{kontak}</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    urls: state.urlReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // moveUrl
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);