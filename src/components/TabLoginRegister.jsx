import React, { Component } from 'react';
import { Row, Col, Card, TabContent, TabPane, Button } from 'reactstrap';
// import classnames from 'classnames';
import FormRegister from './FormRegister';
import FormLogin from './FormLogin';
import { Icon } from 'react-icons-kit';
import { home, userPlus, checkmark } from 'react-icons-kit/icomoon';
import { Link } from "react-router-dom";

class TabLoginRegister extends Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    }
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
          <Row style={{ marginTop: 50}}>
            <Col md="4" sm="12"></Col>
            <Col md="4" sm="12">
              <div className="tabsWrap">
                <ul>
                  <li>
                    <Link to="/">
                      <Button color="link">
                        <Icon size="20" style={{ marginRight: 8 }} icon={home}/>
                          Home
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Button color="link" onClick={() => { this.toggle('1'); }}>
                      <Icon size="20" style={{ marginRight: 8 }} icon={userPlus}/>
                        Register
                    </Button>
                  </li>
                  <li>
                    <Link to="/login">
                      <Button color="link">
                        <Icon size="20" style={{ marginRight: 8 }} icon={checkmark}/>
                          Login
                      </Button>
                    </Link>
                  </li>
                  <div className="clear"></div>
                </ul>
              </div>
              <Card>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <FormRegister/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                      <FormLogin/>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Card>
            </Col>
            <Col md="4"></Col>
          </Row>
          <div className="tabWrap">

          </div>
      </div>
    );
  }
}

export default TabLoginRegister;