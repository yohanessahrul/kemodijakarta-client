import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Service extends Component {
  render() {
    return (
      <div>
        <Container>
          <h2 className="titleContent">Daftar Layanan</h2>
          {/* <p className="descContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fugiat deserunt dolor asperiores voluptatem, commodi impedit quaerat nesciunt odio ipsam ad dicta sequi accusantium, illo similique minus? At, veniam tempora.</p> */}
          {/* <p className="descService">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ad maiores ratione est perferendis nisi sapiente consectetur, unde aliquid quia quos quis hic!</p> */}
          <div className="service-thumb">
            <Row>
              <Col xs="12" md="3" className="colService">
                <img src={require('../assets/img/doctor.png')} alt="doctor"/>
                <h3>Akomodasi dan Transportasi</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus quos..</p> */}
              </Col>
              <Col xs="12" md="3" className="colService">
                <img src={require('../assets/img/wheelchair.png')} alt="wheelchair"/>
                <h3>Perawat Home Care & ALKES</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molest..</p> */}
              </Col>
              <Col xs="12" md="3" className="colService">
                <img src={require('../assets/img/smartphone.png')} alt="smartphone"/>
                <h3>Konsumsi</h3>
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi delectus..</p> */}
              </Col>
              <Col xs="12" md="3" className="colService">
                <img src={require('../assets/img/medical-history.png')} alt="medical"/>
                <h3>Edukasi dan Konseling</h3>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolore iure..</p> */}
              </Col>
              <Col xs="12" md="3" className="colService">
                <img src={require('../assets/img/medical-history.png')} alt="medical"/>
                <h3>Hiburan dan lain-lain</h3>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dolore iure..</p> */}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Service;