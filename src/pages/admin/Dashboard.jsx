import React, { Component } from 'react';
import history from '../../history';
import { Container, Row, Col } from 'reactstrap';
import SideBarMenu from '../../components/admin/SideBarMenu';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { cekAuthAction } from '../../actions/action.user';

class Dashboard extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

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
          <Row style={{ background: '#04251b' }}>
            <SideBarMenu/>
            <Col md="10" style={{ background: 'white' }}>
              <div style={{ padding: '50px 5%' }}>
                <h1>Dashboard</h1>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);