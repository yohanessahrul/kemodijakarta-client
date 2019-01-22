import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

class About extends Component {
  componentDidMount () {
    
  }
  render() {
    const { slideSection } = this.props.lang.home
    const { tentang, tim } = this.props.lang.about
    return (
      <div>
        <div className="headerWrap">
          <Navigation lang={this.props.lang.menu}/>
        </div>
        <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
        <Container style={{ paddingBottom: '100px' }}>
          <div className="marginTop"></div>
          <Row>
            <Col>
              <Container>
              <Row className="animated bounceInDown">
                <div className="aboutWrap">
                  <h2>{tentang.h2}</h2>
                  <p>{tentang.desc}</p> 
                </div> 
              </Row>
              <Row className="animated bounceInUp">
                <div className="aboutWrap">
                  <h2>{tim.h2}</h2>
                  <Row>
                    <Col className="teamList">
                      <ul>
                        <li>Ruben Kurniawan - <span>{tim.ruben}</span></li>
                        <li>Vincent Sutantiyo - <span>{tim.vincent}</span></li>
                        <li>Ricky Prasetyo - <span>{tim.ricky}</span></li>
                        <li>Sigit - <span>{tim.sigit}</span></li>
                        <li>Perawat Lisa - <span>{tim.lisa}</span></li>
                        <li>Nisa - <span>{tim.nisa}</span></li>
                        <li>Ali Hozi - <span>{tim.ali}</span></li>
                        <li>Carolina Budiman - <span>{tim.carolina}</span></li>
                        <li>Jeffry Hermanto - <span>{tim.jefry}</span></li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('STATEEEEEEEEEEEEEE',state)
  return {
    urls: state.urlReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    moveUrl
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About);