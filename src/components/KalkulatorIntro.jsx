import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class KalkulatorIntro extends Component {
  render() {
    const { kalkulatorSection } = this.props.lang.home
      return (
          <div className="kalkulatorIntro">
            <Container>
              <Row style={{ padding: '100px 0px' }}>
                <Col lg="6">
                  <div style={{ width: '100%', overflow: 'hidden', borderRadius: '0px' }}>
                    <img style={{ width: '100%', marginTop: '-30px', marginBottom: '20px' }} src={'/images/calc-medic2.jpeg'} alt="kalkulatorImageIntro"/>
                  </div>
                  <div className="clear"></div>
                </Col>
                <Col lg="6">
                  <h2  style={{ padding: '10px 0px 20px 0px', color: '#5a5a5a', fontFamily: 'Rubik' }}>{kalkulatorSection.h1}</h2>
                  <h5 style={{ color: 'gray', lineHeight: '1.5em' }}>
                    {kalkulatorSection.h3}
                  </h5>
                  <br/>
                  <Link to="/kalkulator" target="_blank">
                    <Button color="info" size="lg">
                      {kalkulatorSection.button}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
      );
  }
}

export default KalkulatorIntro;