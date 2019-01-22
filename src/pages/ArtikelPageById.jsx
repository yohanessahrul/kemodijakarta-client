import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { calendar, eye } from 'react-icons-kit/fa';
import { cleanDate } from '../helper/helper';

import FixedButtonDaftarMobile from '../components/FixedButtonDaftarMobile';
import Navigation from '../components/Navigation';
import InlineShareButton from '../components/InlineShareButton';
import ArtikelTerpopuler from '../components/ArtikelTerpopuler';
import ArtikelTerbaru from '../components/ArtikelTerbaru';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticleByIdAction, addViewerAction } from '../actions/action.artikel';

class ArtikelPageById extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isLoading: false,
      currentArticle: null
    }
  }

  componentWillMount () {
    console.log('will mount');
  }

  componentDidMount () {
    console.log('did mount');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    let id = window.location.pathname.split('/')[2];
    let token = localStorage.getItem('token');
    this.props.addViewerAction(id);
    this.props.getArticleByIdAction(id, token);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isLoading: true,
      currentArticle: nextProps.state.reducerArticle.readArticle
    })
  }

  render() {
    const { slideSection } = this.props.lang.home;
    if (this.state.isLoading) {
      return (
        <div>
          <div className="headerWrap">
            <Navigation lang={this.props.lang.menu}/>
          </div>
          <FixedButtonDaftarMobile btnlang={slideSection.btnDaftarMobile}/>
          <Container style={{ paddingBottom: '100px' }}>
            <div className="marginTop"></div>
            <Row>
              <Col md="12">
              </Col>
            </Row>
            <Row>
              <Col md="8">
                <Breadcrumb className="breadcrumbArticle" tag="nav" listTag="div">
                  <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                  <BreadcrumbItem tag="a" href="/artikel">Article</BreadcrumbItem>
                  <BreadcrumbItem active tag="span">Detail Artikel</BreadcrumbItem>
                </Breadcrumb>
                <h2 className="headingArtikelById">{this.state.currentArticle.judul}</h2>
                <div className="dateArtikelById"><Icon style={{ paddingRight: '5px' }} size={12} icon={calendar} />{cleanDate(this.state.currentArticle.createdDate)} <Icon style={{ paddingLeft: '10px', paddingRight: '5px' }} size={12} icon={eye} />{this.state.currentArticle.view} views</div>
                <InlineShareButton dataShare={this.state.currentArticle}/>
                <img style={{ width: '100%' }} className="imageArtikelById" src={this.state.currentArticle.img} alt={this.state.currentArticle.img}/>
                <div dangerouslySetInnerHTML={{ __html: this.state.currentArticle.isi }}></div>
                <br/>
                <hr/>
                <br/>
                <Row>
                  <ArtikelTerbaru />
                </Row>
              </Col>
              <Col md="4">
                <Row>
                  <Col md="12">
                    <div style={{ width: '100%', height: '300px', background: '#bdd1d2' }}>
                      <h3>ADS</h3>
                    </div>
                  </Col>
                </Row>
                <br/>
                <Row>
                  <Col md="12">
                    {/* <ArtikelTerpopuler/> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
      </div>  
    );
    } else {
      return (<div>Loading..</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getArticleByIdAction, addViewerAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtikelPageById);