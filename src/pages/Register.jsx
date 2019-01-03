import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveUrl } from '../actions/action.url';

import TabAutentikasi from '../components/TabAutentikasi';
import FormRegister from '../components/FormRegister';

class Auth extends Component {
  componentWillMount(){
    let currURL = this.props.history.location.pathname;
    this.props.moveUrl(currURL);  //dispatch
  }
  componentDidMount() {
    console.log('Props untuk alang => ', this.props.lang)
  }
  render() {
    return (
      <div>
        {/* <TabLoginRegister/> */}
        <Row style={{ marginTop: 50}}>
          <Col md="4" sm="12"></Col>
          <Col md="4" sm="12">
            <TabAutentikasi/>
            <FormRegister/>
          </Col>
          <Col md="4" sm="12"></Col>
        </Row>
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
    moveUrl // func name on reducer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);