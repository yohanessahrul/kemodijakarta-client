import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col
 } from 'reactstrap';
import FormBukuTamu from '../components/FormBukuTamu';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

import { Icon } from 'react-icons-kit';
import { envelopeO, whatsapp } from 'react-icons-kit/fa';

class Contact extends Component {
  componentDidMount () {
    
  }
  render() {
    const { h1 } = this.props.lang.contact.form
    const { kontak } = this.props.lang.contact
    const { slideSection } = this.props.lang.home
    return (
      <div>
        <div className="headerWrap">
          <Navigation lang={this.props.lang.menu}/>
        </div>
        <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
        <Container style={{ paddingBottom: '100px' }}>
          <div className="marginTop"></div>
          <Row>
            <Col md="6">
              <div className="wrapContact">
                <h3>{h1}</h3>
                <FormBukuTamu lang={this.props.lang.contact}/>
              </div>
            </Col>
            <Col md="6">
              <div className="wrapContact">
                <h3>{kontak.h1}</h3>
                <div style={{ position: 'relative', display: 'table', background: 'rgb(245, 245, 245)', borderRadius: '20px', marginBottom: '20px', width: '100%', padding: '10px', marginTop: '20px'}}>
                  <Icon icon={envelopeO} size="25" style={{ position: 'absolute', top: '10px', left: '15px', background: '#ff4b4b', padding: '5px', color: 'white', float: 'left', borderRadius: '30px' }}/>
                  <span style={{ color: '#6f6f6f', padding: '5px 8px 5px 50px', fontSize: '18px', float: 'left' }}>info[at]kemodijakarta.com</span>
                </div>
                <div className="clear"></div>
                <div style={{ position: 'relative', display: 'table', background: 'rgb(245, 245, 245)', borderRadius: '20px', marginBottom: '20px', width: '100%', padding: '10px'}}>
                  <Icon icon={whatsapp} size="30" style={{ position: 'absolute', top: '10px', left: '15px', background: '#56C447', padding: '3px', color: 'white', float: 'left', borderRadius: '30px' }}/>
                  <span style={{ color: '#6f6f6f', padding: '5px 8px 5px 50px', fontSize: '18px', float: 'left' }}>0812-288-566-99</span>
                </div>
                <div className="clear"></div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer/>
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
    moveUrl
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);