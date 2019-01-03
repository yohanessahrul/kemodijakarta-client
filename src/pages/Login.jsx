import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TabAutentikasi from '../components/TabAutentikasi';
import FormLogin from '../components/FormLogin';

class Login extends Component {
  render() {
    return (
      <div>
        <Row style={{ marginTop: 50}}>
          <Col md="4" sm="12"></Col>
          <Col md="4" sm="12">
            <TabAutentikasi/>
            <FormLogin/>
          </Col>
          <Col md="4" sm="12"></Col>
        </Row>
      </div>
    );
  }
}

export default Login;