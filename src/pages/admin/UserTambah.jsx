import React, { Component } from 'react';
import history from '../../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';
import FormTambahUser from '../../components/admin/FormTambahUser';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cekAuthAction } from '../../actions/action.user';

class UserTambah extends Component {
  
  componentDidMount () {
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

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <SideBarMenu/>
            <Col md="10">
              <FormTambahUser/>
            </Col>
          </Row>
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserTambah);