import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Blog extends Component {
  render() {
    // console.log('match.url = ', this.props.match.url)
    return (
      <div>
        <Container>
          <h2>Blog</h2>
          <Row>
            <Col md="4">
              <div className="thumb-img">
              </div>
              <h3>Lorem ipsum dolor, sit amet consectetur</h3>
            </Col>
            <Col md="4">
              <div className="thumb-img"></div>
              <h3>Lorem ipsum dolor, sit amet consectetur</h3>
            </Col>
            <Col md="4">
              <div className="thumb-img"></div>
              <h3>Lorem ipsum dolor, sit amet consectetur</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blog;