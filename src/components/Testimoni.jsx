import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Testimoni extends Component {
  render() {
    return (
      <div style={{ width: '100%', background: '#f2f2f2' }}>
        <Container>
          <Row style={{ padding: '100px 0px 10px 0px' }}>
            <Col>
              <h3 style={{ textAlign: 'center' }}>Testimoni</h3>
            </Col>
          </Row>
          <Row style={{ padding: '10px 0px 100px 0px' }}>
            <Col md="3">
              <div style={{ width: '150px', height: '150px', display: 'block', textAlign: 'center',  overflow: 'hidden', background: 'green', borderRadius: '200px', margin: '0 auto' }} className="avatarTesti">
                <img style={{ width: '100%' }} src={require('../assets/img/avatar/boy.png')} alt="testi1" />
              </div>
              <br/>
              <h3 style={{ fontSize: '18px', textAlign: 'center' }}>Siti Komariah</h3>
              <p style={{ color: 'gray', textAlign: 'center', fontSize: '14px' }}>Saya menderita kanker stadium lanjut, dan mendapatkan kemudahan informasi berobat disini..</p>
            </Col>
            <Col md="3">
              <div style={{ width: '150px', height: '150px', display: 'block', textAlign: 'center',  overflow: 'hidden', background: 'green', borderRadius: '200px', margin: '0 auto' }} className="avatarTesti">
                <img style={{ width: '100%' }} src={require('../assets/img/avatar/boy.png')} alt="testi2" />
              </div>
              <br/>
              <h3 style={{ fontSize: '18px', textAlign: 'center' }}>Siti Komariah</h3>
              <p style={{ color: 'gray', textAlign: 'center', fontSize: '14px' }}>Saya menderita kanker stadium lanjut, dan mendapatkan kemudahan informasi berobat disini..</p>
            </Col>
            <Col md="3">
              <div style={{ width: '150px', height: '150px', display: 'block', textAlign: 'center',  overflow: 'hidden', background: 'green', borderRadius: '200px', margin: '0 auto' }} className="avatarTesti">
                <img style={{ width: '100%' }} src={require('../assets/img/avatar/boy.png')} alt="testi3" />
              </div>
              <br/>
              <h3 style={{ fontSize: '18px', textAlign: 'center' }}>Siti Komariah</h3>
              <p style={{ color: 'gray', textAlign: 'center', fontSize: '14px' }}>Saya menderita kanker stadium lanjut, dan mendapatkan kemudahan informasi berobat disini..</p>
            </Col>
            <Col md="3">
              <div style={{ width: '150px', height: '150px', display: 'block', textAlign: 'center',  overflow: 'hidden', background: 'green', borderRadius: '200px', margin: '0 auto' }} className="avatarTesti">
                <img style={{ width: '100%' }} src={require('../assets/img/avatar/boy.png')} alt="testi4" />
              </div>
              <br/>
              <h3 style={{ fontSize: '18px', textAlign: 'center' }}>Siti Komariah</h3>
              <p style={{ color: 'gray', textAlign: 'center', fontSize: '14px' }}>Saya menderita kanker stadium lanjut, dan mendapatkan kemudahan informasi berobat disini..</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Testimoni;